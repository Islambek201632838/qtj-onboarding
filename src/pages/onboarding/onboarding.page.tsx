import React, { useEffect } from "react";
import Search from "components/search-chat/search-chat.component";
import './onboarding.style.scss';
import { deleteChatHistory, getChartStart, getChatResponse } from "requests/onboarding.request";

const OnboardingPage = () => {
  const [isChatOpen, setIsChatOpen] = React.useState<boolean>(false);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [msgs, setMsgs] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSearch = (msg: string, dropChatId = false, audio = null) => {
    if (!msg && !audio)
      return;
    
    if (dropChatId) {
      const newChatId = `${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
      localStorage.setItem("chat_id", newChatId);
      setMsgs([]);
    }

    const chatId = localStorage.getItem("chat_id");

    if (chatId) {
      setIsChatOpen(true);
      const timestamp = new Date().toLocaleTimeString();

      const newMessage: any = {
        role: "user",
        content: msg,
        time: timestamp,
      };
      if (msg) {
        setMsgs((prevMsgs) => [...prevMsgs, newMessage]);
      }
      const newAudioMessage: any = {
        role: "user",
        content: audio,
        time: timestamp,
      };

      if (audio) {
        setMsgs((prevMsgs) => [...prevMsgs, newAudioMessage]);
      }


      setIsLoading(true);

      getChatResponse(msg, audio)
        .then((response) => {
          const botMessage: any = {
            role: "assistant",
            content: response.response,
            time: new Date().toLocaleTimeString(),
          };
          setMsgs((prevMsgs) => [...prevMsgs, botMessage]);
        })
        .catch(() => {
          const botMessage: any = {
            role: "assistant",
            content: 'Произошла ошибка, попробуйте еще раз',
            time: new Date().toLocaleTimeString(),
          };
          setMsgs((prevMsgs) => [...prevMsgs, botMessage]);
        })
        .finally(() => setIsLoading(false));

      setSearchValue("");
    }

  };

  const handleDeleteChatHistory = () => {
    deleteChatHistory()
      .then(() => {
        setMsgs([]);
      });
  }

  useEffect(() => {
    let storedChatId = localStorage.getItem("chat_id");
    if (!storedChatId) {
      const newChatId = `${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
      localStorage.setItem("chat_id", newChatId);
      storedChatId = newChatId;
    }
  }, []);


  return (
    <div className="main">
      <section
        className={`${'main__help'} ${isChatOpen ? 'open' : ""}`}
      >
        <div className={'main__help__wrapper'}>
          {!isChatOpen && (
            <>
              <h1 className={'main__title'}>Чем я могу помочь?</h1>
              <h2 className={'main__subtitle'}>Используйте наш портал для вашего удобства</h2>

            </>
          )}
          <Search
            handleSearchAction={handleSearch}
            msgs={msgs}
            isChatOpen={isChatOpen}
            setIsChatOpenAction={setIsChatOpen}
            searchValue={searchValue}
            setSearchValueAction={setSearchValue}
            isLoading={isLoading}
            handleDeleteChatHistory={handleDeleteChatHistory}
          />
        </div>
      </section>
    </div>

  );
};

export default OnboardingPage;
