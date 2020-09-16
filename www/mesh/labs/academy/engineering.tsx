import React from "react";
import { Layout } from "../../../templates/layout";

export const Engineering = () => (
	<Layout>
		<header>
			<h1>Engineering</h1>
		</header>

		<section>
			<h2>Портрет инженера</h2>

			<p>
				Инженер - это прежде всего первооткрыватель. Поэтому для него критическо важно
				наличие новизны в создаваемом продукте. По этой причине они не любят копирование
				(отсутствие новизны) и предпочтут использовать готовые компоненты для своего
				изобретения (reusing).
			</p>

			<p>
				Новизна оценивается "value". И инженер заинтересован в MVP чтобы убедиться, что
				его продукт на самом деле удивляет своей новизной.
			</p>

			<p>
				Продукты, которые создаёт инженер, редко лежат в какой-то одной плоскости.
				Чтобы создать первый автомобиль или первый телефон не достаточно быть просто
				механиком или исключительно математиком. Без определённой толики социальных,
				предпринимательских и других навыков эти проекты не обрели бы успеха.
			</p>

			<p>
				И если философия - это колыбель всех наук, то инжиниринг - это их мастерская, где
				они вынуждены худо-бедно работать вместе.
			</p>
		</section>

		<section>
			<h2>Выдающиеся инженеры</h2>

			<p>Исследовать личности известных инженеров:</p>
			<ul>
				<li>Архимед</li>
				<li>Эратосфен</li>
				<li>Леонардо да Винчи</li>
				<li>Михаил Ломоносов</li>
				<li>
					Готфрид Лейбниц. Вызывают интерес его попытки объединить церкви (католиков и
					протестантов). По сути, один из столпов гуманизма и ego-ориентации. Есть даже
					гипотеза, что американская конституция - квинтессенция его работ.
				</li>
				<li>Чарльз Беббидж</li>
				<li>Лазар Карно</li>
				<li>Константин Циолковский</li>
				<li>Леонард Эйлер</li>
				<li>
					Пафнутий Чебышёв. В записях Бояршинова на youtube упоминается о роли Чебышёва в
					юриспруденции. Этот факт не отражён в той же Википедии.
				</li>
				<li>Блез Паскаль</li>
				<li>Рене Декарт</li>
				<li>Джеймс Максвелл</li>
				<li>Витрувий</li>
			</ul>

			<p>Попробовать выделить общие черты</p>
			<ul>
				<li>
					Забавно, что многие перечисленных инженеров были непосредственно связаны с
					историей вычислительных машин (Да Винчи, Паскаль, Лейбниц, Чебышев, Беббидж).
					Это инженерное стремление к созданию продукта для своей отрасли? Да Винчи -
					живописец, скульптор, архитектор. Паскаль - философ и прозаик. Чебышёв -
					учитель, юрист? Лейбниц - юрист, историк, дипломат, языковед. Бэббидж - философ,
					экономист.
				</li>
				<li>
					Многие открытия Чёбышева навеяны прикладными интересами. Это неоднократно
					подчёркивал и он сам, говоря, что в создании новых методов исследования '...
					науки находят себе верного руководителя в практике' и что '... сами науки
					развиваются под влиянием ее: она открывает им новые предметы для
					исследования...'
				</li>
				<li>Эйнштейн практически не расставался со скрипкой? </li>
				<li>
					"Самая счастливая мысль в моей жизни", как позднее назовет Эйнштейн общую >
					теорию относительности, пришла к нему в 1907 году: "Я сидел на своем стуле в >
					патентном ведомстве Берна. И вдруг у меня случилось озарение: если человек парит
					в невесомости, то он не будет ощущать свой собственный вес. Я был ошарашен", –
					вспоминал затем будущий нобелевский лауреат. (TODO:Проверить)
				</li>
				<li>
					В 1922 году Нильс Бор получил Нобелевскую премию за модель строения атома. По
					его словам, гениальная идея пришла к нему после сна, в котором ученый увидел
					планеты, кружившиеся по орбитам вокруг Солнца. Приблизительно такое же строение
					имеет и атом.
				</li>
			</ul>

			<p>Исследовать семь принципов Леонардо Да Винчи:</p>
			<ul>
				<li>
					Curiosità—An insatiably curious approach to life and an unrelenting quest for
					continuous learning.
				</li>
				<li>
					Dimostrazione—Acommitment to test knowledge through experience, persistence, and
					a willingness to learn from mistakes.
				</li>
				<li>
					Sensazione—The continual refinement of the senses, especially sight, as the
					means to enliven experience.
				</li>
				<li>
					Sfumato (literally “Going up in Smoke”)—Awillingness to embrace ambiguity,
					paradox, and uncertainty.
				</li>
				<li>
					Arte/Scienza—The development of the balance between science and art, logic and
					imagination. “Whole-brain” thinking. (Инженер как мост между учёным и
					обывателем/потребителем)
				</li>
				<li>Corporalità—The cultivation of grace, ambidexterity, fitness, and poise.</li>
				<li>
					Connessione—Arecognition of and appreciation for the interconnectedness of all
					things and phenomena. Systems thinking.
				</li>
			</ul>
		</section>

		<section>
			<h2>InBox</h2>

			<p>
				По аналогии с вычислениями Success-функции, инженерный процесс может начинаться с
				декомпозиции eXcite/eXpense и прочих x-функций.
			</p>

			<p>
				Базовый инжиниринг можно рассматривать на пересечении алгоритмических теорий
				(алгорифмов, логики предикатов и други изоморфных им теорий) и того, что условно
				можно назвать time-/project-management. Алгорифм - это некоторое предписание,
				которое ведёт нас от исходных данных к искомому результату. За данным определением
				прячется что угодно, от математически вычислений до сложных механических конструкций
				или запутанных жизненных планов.
			</p>

			<p>Результат создания - это объединение (меш).</p>

			<h3>Композиция</h3>
			<p>
				Композиция присутствует в теории алгорифмов (если P<sub>1</sub> и P<sub>2</sub> -
				нормальные алгорифмы над алфавитом A), то может быть построен такой нормальный
				алгорифм P<sub>3</sub> над A, что P<sub>3</sub> &#x2243; P<sub>2</sub>(P<sub>1</sub>
				(P)) для слов P в A.
			</p>
			<p>
				Композиция присутствует в теории категорий, музыке, программировании и множестве
				других дисциплин.
			</p>

			<h3>TDD</h3>
			<p>
				Инженер, который никак не мог нарисовать план эвакуации, в итоге тупо поджег здание
				и стал смотреть, куда ломанутся люди.
			</p>
		</section>
	</Layout>
);

export default Engineering;
