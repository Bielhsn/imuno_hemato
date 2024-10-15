// src/pages/curso_hemacias.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './css/curso_hemacias.css'; // Importando o CSS específico para esta página

const CursoHemacias = () => {
    return (
        <div>
            <Navbar />
            <main>
                <section className="curso-hemacias">
                    <div className="bloco-1">
                        <img src="URL_DA_IMAGEM" alt="Curso de Hemácias" />
                        <h1>Educação sem distância.</h1>
                        <a href="https://pay.hotmart.com/B48662820F?checkoutMode=10" className="botao-inscricao">Inscreva-se</a>
                    </div>
                    <div className="bloco-2">
                        <p>
                            Você sabia que 20% dos receptores previamente transfundidos que não possuem diagnóstico oncohematológico aloimunizam? 
                            Além disso, de 18 a 47% dos receptores com anemia falciforme também aloimunizam pós-transfusão. É muito anticorpo! 
                            Vamos aprender a identificar juntos.
                        </p>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/JARf5JbPUiI" 
                            title="YouTube video" 
                            frameBorder="0" 
                            allowFullScreen
                        ></iframe>
                        <a href="https://pay.hotmart.com/B48662820F?checkoutMode=10" className="botao-inscricao">Inscreva-se</a>
                    </div>
                    <div className="bloco-3">
                        <h2>Objetivo do curso</h2>
                        <p>Esse curso é direto e reto. Se você quer aprender a encontrar o anticorpo no painel de hemácias e só. Esse é seu lugar!</p>
                        <h3>Público alvo</h3>
                        <p>Para quem já tem algum contato ou quer iniciar a vida em banco de sangue e agência transfusional.</p>
                        <h3>Material de apoio</h3>
                        <p>
                            Vamos disponibilizar exercícios de diagrama e um conteúdo que vai te ajudar a identificar o anticorpo e até mesmo 
                            te dar um norte para além do teste de IAI (tipo aquele painel que a gente não consegue identificar nada). 
                            Fora o tabelão de características de anticorpos e antígenos que mais vemos por ai.
                        </p>
                        <h3>Idiomas</h3>
                        <p>Português e agora temos opção com legenda em espanhol e inglês.</p>
                        <h3>Aulas</h3>
                        <p>
                            São 4 aulas no total. Na aula 1, vamos juntos dar alguns passos para trás e relembrar. você vai ter uma base objetiva 
                            dos principais pontos que precisa saber para seguir em frente. 
                            Nas aulas 2, 3, e 4, após a base da primeira aula estaremos prontos para pular juntos para o fantástico (ou não) 
                            mundo do efeito de dose e dos múltiplos anticorpos. Fora essas aulas, temos um conteúdo gravado que foi realizado 
                            ao vivo com alguns alunos para a correção dos exercícios que foi a lição de casa.
                        </p>
                        <h3>Certificado</h3>
                        <p>Claro que sim! Após a conclusão, você terá seu certificado garantido.</p>
                        <h3>Professora</h3>
                        <p>Thamy C. S. Silva</p>
                        <a href="https://pay.hotmart.com/B48662820F?checkoutMode=10" className="botao-inscricao">Inscreva-se</a>
                    </div>
                    <div className="bloco-4">
                        <h2>Quem já foi nosso aluno, achou o que?</h2>
                        <blockquote>
                            <p>"Se ficar melhor estraga kkkk impossível, pra uma plataforma que nunca fez um curso, já chegou trazendo conteúdo todo mastigado, de fácil compreensão, bem didático. Excelente !!"</p>
                        </blockquote>
                        <blockquote>
                            <p>"Passando pra dizer que A-MEI o curso e estou muito feliz por estar participando... Amo imuno-hematologia mas tenho (ou tinha) algumas limitações... depois do curso tudo está ficando mais claro e mais gostoso! Espero que não parem por aqui... vc ajuda muita gente com sua experiencia e vivencias diárias! Muito obrigada por tanto!"</p>
                        </blockquote>
                        <blockquote>
                            <p>"Achei que o curso atendeu completamente aos objetivos propostos, gostei muito do conteúdo e demonstrações dos painéis! Parabéns pela iniciativa! No meu caso que não estou na bancada de imuno-hematologia na rotina, está sendo ótimo para revisar e relembrar detalhes importantes. Com certeza recomendo!"</p>
                        </blockquote>
                        <blockquote>
                            <p>"Conteúdo de qualidade, apresentado de forma coesa e abrangente para todos que atuam na área. Ótimo curso!"</p>
                        </blockquote>
                        <blockquote>
                            <p>"Nossa Thamy, parabéns pela aula quando a gente vê que está acabando, fica até triste!! Querendo mais!!!"</p>
                        </blockquote>
                        <blockquote>
                            <p>"Estou gostando muito do curso, bem interativo e deixando os medos de lado, ainda mais quando aparece painéis que são mais anticorpos. Obrigada por esta aula e apresentação."</p>
                        </blockquote>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default CursoHemacias;
