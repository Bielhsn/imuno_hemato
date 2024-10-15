import React from 'react';
import Navbar from '../components/Navbar'; // Importando a Navbar
import Footer from '../components/Footer'; // Importando o Footer
import './css/Cursos.css'; // Importando o CSS da página de Cursos

const Cursos = () => {
    return (
        <div className="cursos">
            <Navbar />
            <div className="bloco-1">
                <h1>Educação sem distância.</h1>
                <p>
                    A imuno&hemato tem como principal objetivo tornar acessível o conhecimento e a educação em imuno-hematologia e hemoterapia por todos que querem e precisam aprender. Se liga nos cursos que temos.
                </p>
            </div>
            <div className="bloco-2">
                <div className="curso">
                    <h2>Desvendando o painel de hemácias.</h2>
                    <p>O curso mais direto e objetivo pra quem tem dificuldade de descobrir qual anticorpo está no painel, que parece mais uma batalha naval.</p>
                    <button onClick={() => window.open('https://pay.hotmart.com/B48662820F?checkoutMode=10', '_blank')}>Saiba mais</button>
                    <button onClick={() => window.open('https://pay.hotmart.com/B48662820F?checkoutMode=10', '_blank')}>Inscreva-se</button>
                </div>
                <div className="curso">
                    <h2>Por onde começar?</h2>
                    <p>Esse curso vai te levar para os primórdios da imunologia e hematologia e te mostrar quanto é importante você saber disso pra estar na bancada.</p>
                    <button disabled>Saiba mais</button>
                    <button disabled>Inscrições em breve</button>
                </div>
                <div className="curso">
                    <h2>Dominando a hemoterapia.</h2>
                    <p>Aqui você vai saber da essência da imuno-hemato. Vamos aprender juntos os principais conceitos de grupos sanguíneos, significado clínico dos anticorpos, técnicas dos testes pré-transfusionais e muito mais.</p>
                    <button disabled>Inscrições em breve</button>
                </div>
                <div className="curso">
                    <h2>Minicurso transfusão em RN.</h2>
                    <p>Nesse curso, você vai complementar a sua formação em imuno-hematologia e aprender de forma objetiva e com base científica a resolver problemas avançados que nos deparamos na bancada, aqueles além da rotina mesmo.</p>
                    <button disabled>Inscrições em breve</button>
                </div>
                <div className="curso">
                    <h2>Atualização em sistema Rh.</h2>
                    <p>Aqui você vai conhecer bem mais sobre esse sistema que tem tanta particularidade que só mesmo quem estuda ele exclusivamente pode te contar! De forma leve e objetiva, você vai desmistificar a complexidade do Rh.</p>
                    <button disabled>Inscrições em breve</button>
                </div>
                <div className="curso">
                    <h2>Combos.</h2>
                    <p>Bom, como o próprio nome diz a gente vai te colocar por dentro de todas as técnicas disponíveis de genotipagem e te explicar como isso funciona. Do jeito que você gosta: de forma objetiva!</p>
                    <button disabled>Inscrições em breve</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cursos;
