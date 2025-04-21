import React, { useEffect } from 'react';
import AssistantCard from './assistant-card';
import marat from './assets/marat.jpg';
import aset from './assets/aset.jpg';
import daniar from './assets/daniar.jpg';
import indira from './assets/indira.jpg';
import alia from './assets/alia.jpg';
import dinara from './assets/dinara.jpg';
import madina from './assets/madina.jpg';
import samat from './assets/samat.jpg';

import './assistants.style.scss';

const AssistantsPage = () => {
  const assistants = [
    {
      name: 'Асет',
      type: 'Ассистент по нормативным документам',
      photo: aset,
      duties: [
        'Ответит на любой вопрос по ВНД',
        'Предоставит точные цитаты и ссылки на источники',
        'Распознает противоречия в документах',
        'Поможет сформулировать обоснованные рекомендации',
      ],
      action: 'Начать диалог',
      isDisabled: false,
    },
    {
      name: 'Динара',
      type: 'Кадровый ассистент',
      photo: dinara,
      duties: [
        'Подскажет по отпускам и больничным',
        'Объяснит оргструктуру',
        'Поможет с любыми HR-процессами',
        'Всё о людях и для людей — с заботой и точностью',
      ],
      action: 'Начать диалог',
      isDisabled: false,
    },
    {
      name: 'Самат',
      type: 'Ассистент по безопасности и охране труда',
      photo: samat,
      duties: [
        'Пояснит требования по охране труда и технике безопасности',
        'Напомнит о нужных инструктажах и проверках',
        'Объяснит, что делать при несчастном случае на работе',
        'Безопасность — это не формальность. Самат подскажет, как быть уверенным и защищённым.',
      ],
      action: 'Начать диалог',
      isDisabled: true,
    },
    {
      name: 'Данияр',
      type: 'ИТ-ассистент',
      photo: daniar,
      duties: [
        'Настроит доступы и VPN',
        'Объяснит, как работает техника',
        'Поможет решить любую ИТ-проблему',
        'Пиши — и проблема с техникой исчезнет.',
      ],
      action: 'Начать диалог',
      isDisabled: true,
    },
    {
      name: 'Алия',
      type: 'Бухгалтер-ассистент',
      photo: alia,
      duties: [
        'Поможет оформить авансовый отчёт',
        'Объяснит, как работают выплаты и налоги',
        'Проверит чеки, таблицы и формы',
        'Всё по полочкам — быстро и понятно.',
      ],
      action: 'Начать диалог',
      isDisabled: true,
    },
    {
      name: 'Марат',
      type: 'Юридический ассистент',
      photo: marat,
      duties: [
        'Проверит договор',
        'Поможет оформить документы',
        'Подскажет, как действовать по правилам',
        'Твой надёжный советник по юридическим вопросам — чётко, быстро и по делу.',
      ],
      action: 'Начать диалог',
      isDisabled: true,
    },
    {
      name: 'Мадина',
      type: 'Финансовый ассистент',
      photo: madina,
      duties: [
        'Объяснит бюджеты и расходы',
        'Поможет с финансовыми процедурами',
        'Разложит цифры по полочкам',
        'Понимает финансы лучше, чем Excel — просто спроси.',
      ],
      action: 'Начать диалог',
      isDisabled: true,
    },
  ];

  return (
    <div className="assistants">
      {/* <h1 className={'assistants__header'}>Ассистенттер көрмесі</h1> */}
      <div className={'assistants__wrapper'}>
        <div className="assistants__grid">
          {assistants.map((assistant, index) => (
            <AssistantCard key={index} assistant={assistant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssistantsPage;
