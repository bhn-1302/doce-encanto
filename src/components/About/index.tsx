import { Link } from "react-router-dom"

export const AboutSection = () => {
    return (
        <section id="about" className="bg-background py-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

                <div className="flex justify-center">
                    <img src="/images/confeiteira.png" alt="Confeiteira preparando doces" className="w-80 md:w-[22rem] rounded-2xl shadow-lg"/>
                </div>

                <div className="space-y-6 text-center">
                    <h2 className="font-secondary text-4xl md:text-5xl text-primary leading-tight cursor-default">Quem somos</h2>

                    <p className="font-primary text-lg text-text-muted leading-relaxed cursor-default">
                        Na <span className="text-tertiary font-semibold">Doce Encanto</span>, acreditamos que cada doce carrega memórias, afeto e momentos especiais.Nossa missão é transformar ingredientes selecionados em experiências 
            únicas, sempre com carinho e dedicação.
                    </p>
                    <button className="px-6 py-3 bg-primary text-white font-primary font-medium rounded-xl shadow-md hover:bg-secondary transition-colors cursor-pointer"><Link to={"/products"}>Conheça nossos produtos</Link></button>
                </div>
            </div>
        </section>
    )
}