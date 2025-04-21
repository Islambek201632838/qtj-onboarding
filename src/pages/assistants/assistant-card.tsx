import React from 'react';
import { useNavigate } from 'react-router-dom';

const AssistantCard = ({ assistant }: any) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${'assistants__card'} ${
        assistant?.isDisabled ? 'assistants__card-disabled' : 'assistants__card-active'
      }`}
    >
      {assistant?.isDisabled && <div className="assistants__card__overlay">В процессе</div>}
      <div
        className="assistants__card__avatar"
        style={{
          backgroundImage: `url("${assistant?.photo}")`,
        }}
      />
      <div className="assistants__card__name">{assistant?.name}</div>
      <div className="assistants__card__type">{assistant?.type}</div>
      <ul className="assistants__card__company">
        {assistant?.duties.map((item: any) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button
        disabled={assistant?.isDisabled}
        className={`${`assistants__card__btn`} ${
          assistant?.isDisabled ? 'assistants__card__btn-disabled' : 'assistants__card__btn-active'
        }`}
        onClick={() => {
          if (assistant?.name === "Динара") {
            window.location.href = 'http://91.185.21.250:82/app/onboarding';
          } else {
            navigate('/app/onboarding');
          }
        }}
      >
        {assistant?.action}
      </button>
    </div>
  );
};
export default AssistantCard;
