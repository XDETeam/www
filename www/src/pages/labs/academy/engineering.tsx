import React from "react";
import { Layout } from "../../../templates/layout";

export const Engineering = () => (
	<Layout>
		<header>
			<h1>Engineering</h1>
		</header>

		<section>
			<h2>InBox</h2>

			<p>
				Базовый инжиниринг можно рассматривать на пересечении алгоритмических теорий
				(алгорифмов, логики предикатов и други изоморфных им теорий) и того, что условно
				можно назвать time-/project-management. Алгорифм - это некоторое предписание,
				которое ведёт нас от исходных данных к искомому результату. За данным определением
				прячется что угодно, от математически вычислений до сложных механических конструкций
				или запутанных жизненных планов.
			</p>

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
		</section>
	</Layout>
);

export default Engineering;