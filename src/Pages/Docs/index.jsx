import React from "react";
import Header from "src/Components/Header";
import s from "./Docs.module.scss";

export default function Docs() {
  return (
    <>
      <Header />
      <main className={s.main}>
        <h2>Как пользоватся этой штуковиной</h2>
        <h3>
          Дарова. Кароче, автор попытался перенести елементы рпг в реальный мир,
          и ему это удалось. В чем суть? Вы берете, у нпс (тоесть себя) задание,
          выоплняете его, и за это получаете очки. Нпс сам вам начисляет очки,
          только нужно ему про это дать знать. Примеры такие <br />
          <br />
          Почистить зубы - 5 очков
          <br />
          Подтягнутся 5 раз - 10 очков
          <br />
          Не есть сладкое в течении дня - 5 очков
          <br />
          Подготовится к соревнованиям - 8 очков
          <br />
          <br />
          Это были примеры, сколько примерно очков себе давать за задания. Один
          день = 100 очков россчитано, тоесть, если за день вы наберете 100
          очков - ваш день Полностью удался, если нет, то не совсем (что
          логично). Удачи, воин!
        </h3>
      </main>
    </>
  );
}
