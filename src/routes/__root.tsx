import { Outlet } from "@tanstack/react-router";
import { createRootRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Copyright } from "../components/Copyright";

import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";
import { useEffect } from "react";

export const RootPage: React.FC = () => {
  useEffect(() => {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom left",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          position: "right",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      categories: {
        necessary: {
          readOnly: true,
        },
        analytics: {},
      },
      language: {
        default: "no",
        autoDetect: "browser",
        translations: {
          no: {
            consentModal: {
              title: "Les dette før du går videre!",
              description:
                "Vi bruker <a href='/cookies'>informasjonskapsler</a> for å gi deg en bedre opplevelse og forbedre tjenestene våre.<br><br>Hvis du velger «Godta alle», samtykker du i bruken av informasjonskapsler.<br><br>Hvis du velger avis alle, bruker vi ikke informasjonskapsler bortsett fra de som er nødvendige for at nettstedet skal fungere.",
              acceptAllBtn: "Godta alle",
              acceptNecessaryBtn: "Avis alle",
              showPreferencesBtn: "Tilpass innstillinger",
              footer:
                '<a href="/privacy">Personvernregler</a>\n<a href="/terms">Vilkår for bruk</a>',
            },
            preferencesModal: {
              title: "Dine personverninnstillinger",
              acceptAllBtn: "Godta alle",
              acceptNecessaryBtn: "Avis alle",
              savePreferencesBtn: "Lagre innstillinger",
              closeIconLabel: "Lukk",
              serviceCounterLabel: "Tjeneste|Tjenester",
              sections: [
                {
                  title: "Bruk av informasjonskapsler",
                  description:
                    "Informasjonskapsler er små datafiler som lagres på enheten din og brukes til å forbedre nettstedsopplevelsen din. Vi bruker informasjonskapsler for å tilpasse innhold og annonser, gi sosiale mediefunksjoner og analysere trafikken vår. Ved å godta alle informasjonskapsler, samtykker du i vår bruk av dem. Du kan også velge å avvise visse typer informasjonskapsler.",
                },
                {
                  title:
                    'Strengt nødvendige informasjonskapsler <span class="pm__badge">Alltid aktivert</span>',
                  description:
                    "Disse informasjonskapslene er nødvendige for at nettstedet skal fungere og kan ikke slås av i våre systemer. De brukes vanligvis bare som svar på handlinger du har gjort som innebærer en forespørsel om tjenester, for eksempel å angi personverninnstillinger, logge inn eller fylle ut skjemaer.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analyseinformasjonskapsler",
                  description:
                    "Disse informasjonskapslene lar oss telle besøk og trafikkilder, slik at vi kan måle og forbedre ytelsen til nettstedet vårt. De hjelper oss å vite hvilke sider som er mest og minst populære, og se hvordan besøkende beveger seg rundt på nettstedet.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Mer informasjon",
                  description:
                    'For spørsmål angående vår bruk av informasjonskapsler og dine valg, vennligst <a class="cc__link" href="#yourdomain.com">kontakt oss</a>.',
                },
              ],
            },
          },
        },
      },
    });
  });

  return (
    <div
      className="min-h-screen min-w-full dark:bg-primary dark:text-white"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/abstract-shapes-with-gray-tones_1055-1950.jpg?t=st=1715762680~exp=1715766280~hmac=3a4896ece535e2afc7984384ee153e5ddfe937a78de72fddfbc63affc8f09033&w=826)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
      }}
    >
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export const Route = createRootRoute({
  component: RootPage,
});
