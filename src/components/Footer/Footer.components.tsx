import React from "react";

import { Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <footer className="text-white">
      <div className="bg-sky-600 dark:bg-slate-800">
        <Typography variant="body1" component="p" mx={20} py={2}>
          L’acquisition d’un chien est un engagement à long terme, un acte
          réfléchi et accepté de tous les membres du foyer, qui doivent tous
          s’assurer que l’animal se sente bien.
        </Typography>
        <Typography variant="body1" component="p" mx={20} mb={2}>
          Un chien n'est pas non plus un objet ou un jouet, par conséquent il ne
          peut pas faire l'objet d'un cadeau d'anniversaire, de Noël ou tout
          autre occasion
        </Typography>
        <Typography variant="body2" component="p" align="center" pb={1}>
          Tous nos chiens sont enregistrés et validé à l'Icad à l'âge de 2 mois
          / 2 mois et demi
        </Typography>
      </div>
      <Typography
        variant="overline"
        component="p"
        className="bg-sky-700 dark:bg-slate-900"
        align="center"
      >
        © 2023 - Les Shiba d'Inari - Tous droits réservés
      </Typography>
    </footer>
  );
};

export default Footer;
