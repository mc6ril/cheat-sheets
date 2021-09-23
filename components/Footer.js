import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <footer>
      <div className="about">
        <h2>Pourquoi ce site</h2>
        <p>{`Initialement pour moi même lors de mon apprentissage du developpement front-end, j'ai décidé de
        crée ce site web pour faciliter les recherches de mots clés ou propriétés. 
        On ne peut pas se rappeller de tout, aussi, ce site est fait pour se rafraichir la mémoire !
        Projet open source, je suis disponible pour discuter du projets et l'améliorer.`}</p>
      </div>
      <div className="social-networks">
        <FontAwesomeIcon icon={["fab", "github"]} />
      </div>
      <div className="informations">
        <p>
          Réalisé par Cyril Lesot <span>&#169;</span> 2021
        </p>
        <p>Made with React / Next.js</p>
      </div>
    </footer>
  );
}
