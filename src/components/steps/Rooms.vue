<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-list three-line>
          <v-list-item
            v-for="cat of categories"
            :key="cat.name"
            :href="'#' + cat.name"
          >
            <v-list-item-content :title="cat.description">
              <v-list-item-title>{{ cat.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ cat.description }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                icon
                @click.stop.prevent="showInfo(cat.description, cat.name)"
              >
                <v-icon color="grey lighten-1" v-text="iconInfo" />
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="6">
        <v-list three-line>
          <template v-for="cat of categories">
            <v-subheader
              v-text="cat.name"
              :key="'h' + cat.name"
              :id="cat.name"
            />
            <v-list-item
              v-for="room of cat.rooms"
              :key="cat.name + ':' + room.name"
            >
              <v-list-item-content>
                <v-list-item-title>{{ room.name }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  room.description
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  @click.stop.prevent="showInfo(room.description, room.name)"
                >
                  <v-icon color="grey lighten-1" v-text="iconInfo" />
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
    </v-row>
    <v-dialog :value="infoModal" width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ infoTitle }}</span>
        </v-card-title>
        <v-card-text>{{ infoText }}</v-card-text>
        <!-- <v-card-actions>
          <v-btn color="accent" text @click="infoModal = false"
            >Schließen</v-btn
          >
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import {
  VContainer,
  VRow,
  VCol,
  VList,
  VListItem,
  VListItemContent,
  VListItemAction,
  VListItemTitle,
  VListItemSubtitle,
  VSubheader,
  VBtn,
  VIcon,
  VCard,
  VCardTitle,
  VCardText,
  VCardActions,
  VDialog
} from "vuetify/lib";

import { mdiInformation } from "@mdi/js";

const categories = [
  {
    name: "Büro",
    description:
      "An Büroarbeitsplätzen werden gewöhnliche Arbeiten verrichtet. Konzentriertes Arbeiten erfordert Phasen der Aktivierung und Erholung. Großes Augenmerk sollte auf die Privatheit und das persönliche Territorium gelegt werden. Es ist wichtig, Aufmerksamkeitsschwerpunkte zu setzen und die zeitliche sowie räumliche Orientierung zu unterstützen. Die Beleuchtung muss eine gute Kommunikation ermöglichen.",
    rooms: [
      {
        name: "Chefbüro",
        description:
          "Das Chefbüro hat meist einen Arbeitsplatz, an dem gewöhnliche Arbeiten verrichtet werden, und unterliegt damit den gleichen Anforderungen wie jeder andere Büroarbeitsplatz. Als Besonderheit sollte das Chefbüro auch einen repräsentativen Charakter haben. Dabei ist es wichtig, Aufmerksamkeitsschwerpunkte zu setzen und das persönliche Territorium zu kennzeichnen. Zeichnet sich ein Büro durch eine besonders hervorgehobene Architektur aus, so sollte die Beleuchtung architektonische Elemente betonen. Licht sollte zudem zeitliche Orientierung geben."
      },
      {
        name: "Einzelbüro",
        description:
          "Der Arbeitsplatz im Einzelbüro unterliegt den gleichen Anforderungen an die Beleuchtung wie das Chefbüro. Besondere Beachtung sollte aber auf die Privatheit und das persönliche Territorium gelegt werden. Konzentriertes Arbeiten in einem Einzelbüro ist nur möglich, wenn auch Phasen der – allgemeinen und mentalen – Aktivierung und Erholung sichergestellt werden."
      },
      {
        name: "Gruppenbüro",
        description:
          "Ein Gruppenbüro besteht aus einzelnen Arbeitsplätzen, die die gleichen Anforderungen haben wie Arbeitsplätze in einem Einzelbüro. Der Einzelne wird sich in der Regel ein persönliches Territorium schaffen. Kommunikation sollte unterstützt werden. Allgemeine und mentale Aktivierung und Erholung sind im Arbeitsalltag wesentlich. Daneben ist im Gruppenbüro die zeitliche und räumliche Orientierung wichtig."
      },
      {
        name: "Großraumbüro",
        description:
          "Auch ein Großraumbüro besteht aus einzelnen Arbeitsplätzen. Darüber hinaus gibt es dort häufig Begegnungs- und Bewegungszonen. Geräusche, Unruhe und Ablenkung spielen eine große Rolle. Individuell unterschiedlich kann der Wunsch nach einem persönlichen Territorium sein. Räumliche sowie zeitliche Orientierung sind sehr wichtig. Dies gilt insbesondere bei Arbeitsplätzen in der Raumtiefe. Gliederungen von Raum oder Mobiliar können durch die Beleuchtung aufgegriffen werden und sorgen so für Orientierung."
      },
      {
        name: "Besprechungsraum",
        description:
          "Ein Besprechungsraum wird in der Regel für kürzere Zeitabschnitte genutzt. Selten verbringt man dort einen ganzen Arbeitstag. Besonders wichtig ist hier die Unterstützung von Kommunikation und der Einsatz von Präsentationsmedien. Es sollten aber auch gelegentliche konzentrierte Schreib- und Leseaufgaben unterstützt werden. Zeitliche Orientierung, besonders hinsichtlich der Verweildauer, ist wichtig. Je nach Nutzung, beispielsweise für eine interne Besprechung, Kundengespräche oder in repräsentativer Absicht, spielen architektonische Anforderungen eine wesentliche Rolle. Besondere Bedeutung kommt der Bedienung der Beleuchtung zu: Bediengeräte müssen leicht zu erkennen und intuitiv bedienbar sein, die Lichtsituation sollte spontan verständlich sein."
      }
    ]
  },
  {
    name: "Bildung",
    description:
      "In diesem Bereich gibt es sehr unterschiedliche Sehaufgaben: Lesen, Schreiben, Verfolgen von Präsentationen und Erkennen von Gesprächspartnern. Räume sollten Orientierung bieten und ein Gefühl der Vertrautheit schaffen. Das Licht sollte allgemein und mental aktivieren sowie Erholung bieten. Guter Bezug zum Tageslicht ist notwendig für die circadiane Rhythmik und vermittelt zeitliche Orientierung. Hörsäle, Computerräume, Bibliotheken, Werkräume und Sporthallen stellen spezielle Anforderungen an die Beleuchtung.",
    rooms: [
      {
        name: "Unterrichtsraum (Kinder)",
        description:
          "Kinder müssen oft früh aufstehen und über einen längeren Zeitraum hinweg konzentriert lernen. Daher sollte eine adäquate Sichtbarkeit sehr unterschiedlicher Sehaufgaben während des Unterrichts gegeben sein. Räume sollten Orientierung bieten und ein Gefühl der Vertrautheit schaffen. Das Licht sollte allgemein und mental aktivieren sowie Erholung bieten. Guter Bezug zum Tageslicht ist notwendig für die circadiane Rhythmik und vermittelt zeitliche Orientierung."
      },
      {
        name: "Unterrichtsraum (Erwachsene)",
        description:
          "Erwachsene, seien es Studierende an Hochschulen oder Teilnehmer an nebenberuflichen Weiterbildungsmaßnahmen, nutzen Unterrichtsräume sowohl tagsüber als auch bis in spätere Abendstunden hinein. Die Sehaufgaben umfassen Schreiben und Lesen, Verfolgen von (Beamer-) Präsentationen sowie Erkennen der Gesprächspartner. Die Konzentration sollte gefördert werden. Allgemeine und mentale Aktivierung über längere Zeiträume und auch am Abend sind zusätzliche Ziele."
      },
      {
        name: "Werkraum",
        description:
          "Ein Werkraum dient der handwerklichen Arbeit. Die Anforderung, Details, Formen und Farben zu erkennen, ist hier besonders hoch. Dunkle Raumzonen sollten vermieden werden, so dass auch die physische Sicherheit gewährleistet und das subjektive Sicherheitsgefühl unterstützt werden."
      },
      {
        name: "Computerraum",
        description:
          "Ein Computerraum sollte das störungsfreie Arbeiten an Bildschirmen in allen Raumbereichen ermöglichen. Vor allem sollten Spiegelungen und Reflexe auf Bildschirmoberflächen reduziert bzw. vermieden werden. Das Beleuchtungsniveau sollte auf die jeweilige Tätigkeit angepasst werden können."
      },
      {
        name: "Hörsaal",
        description:
          "Ein Hörsaal sollte die dort üblichen grundlegenden Tätigkeiten wie Lesen und Schreiben in allen Raumbereichen leicht ermöglichen. Dazu zählt auch das Schreiben auf der Tafel sowie das Lesen von der Tafel bzw. der Inhalte einer Beamer-Präsentation. Die Beleuchtung sollte an die jeweilige Sehaufgabe angepasst werden können und die räumliche Ausrichtung im Sinne der Aufmerksamkeitsführung unterstützen."
      },
      {
        name: "Sporthalle",
        description:
          "In der Sporthalle kommt es darauf an, auf der gesamten Fläche gleichmäßige Bedingungen vorzufinden. Je nach Sportart sollte die Beleuchtung ausreichend hell sein. Zusätzlich ist in Sporthallen die Schnelligkeit der Sichtbarkeit für den sportlichen Erfolg und auch zur Vermeidung von Verletzungsrisiken wichtig. In Abhängigkeit der ausgeübten Sportart sind mögliche unterschiedliche Blickrichtungen zu berücksichtigen."
      },
      {
        name: "Lehrerzimmer",
        description:
          "Das Lehrerzimmer dient vielen sehr unterschiedlichen Tätigkeiten. Die Bandbreite reicht von Besprechungen über die konzentrierte Vorbereitung auf die nächste Stunde bis hin zur Entspannung. Somit muss die Beleuchtung flexibel sein und unterschiedlichsten Anforderungen gerecht werden."
      },
      {
        name: "Bibliothek",
        description:
          "In der Bibliothek ist die wesentliche Sehaufgabe das Lesen sowohl an Tischen als auch auf Buchrücken in Regalen. Da dort oft über eine längere Zeit konzentriert gearbeitet wird, steht die geistige Aktivierung hier im Vordergrund. Weitere wichtige Anforderungen sind die Ermöglichung von Rückzug und Privatheit. Neben der zeitlichen Orientierung sollte auch die räumliche Orientierung unterstützt werden."
      },
      {
        name: "Patientenzimmer",
        description:
          "Die Anforderungen an die Beleuchtung in einem Patientenzimmer sind sehr unterschiedlich und müssen flexibel anpassbar sein. Für den Patienten stehen Wohlbefinden und Erholung im Vordergrund. Beim tageweisen Aufenthalt in einem Raum sollte die künstliche Beleuchtung den circadianen Rhythmus stabilisieren. In Mehrbettenzimmern und für die Besucher sollte auf ein Mindestmaß an Privatheit geachtet werden. Bei Arztvisiten, Untersuchungen und Behandlungen muss die Beleuchtung vor allem funktionalen Anforderungen entsprechen: Für Arzt und Pflegepersonal steht das Erkennen der Sehaufgaben im Vordergrund. Orientierung und Sicherheit sind auch in der Nacht gefordert."
      }
    ]
  },
  {
    name: "Krankenhaus",
    description:
      "Die Anforderungen an die Beleuchtung in einem Patientenzimmer sind sehr unterschiedlich und müssen flexibel anpassbar sein. Für den Patienten stehen Wohlbefinden und Erholung im Vordergrund. Beim tageweisen Aufenthalt in einem Raum sollte die künstliche Beleuchtung den circadianen Rhythmus stabilisieren. Orientierung und Sicherheit sind auch in der Nacht gefordert. Bei Arztvisiten, Untersuchungen und Behandlungen muss die Beleuchtung vor allem funktionalen Anforderungen entsprechen: Für Arzt und Pflegepersonal steht das Erkennen der Sehaufgaben im Vordergrund.",
    rooms: [
      {
        name: "Intermediate Care",
        description:
          "Die Anforderungen an die Beleuchtung für Intermediate Care sind dem des normalen Patientenzimmers recht ähnlich. Für die gesteigerte Überwachung durch das Pflegepersonal sollte funktionale Beleuchtung wählbar sein. Die Ermöglichung von Privatheit ist hier weniger relevant."
      },
      {
        name: "Intensivpflege",
        description:
          "Neben der funktionalen Beleuchtung für Beobachtung und Untersuchung sind die Unterstützung der circadianen Rhythmik und der zeitlichen Orientierung in der Intensivpflege ein besonders wichtiges Kriterium. Dies ergibt sich aus dem häufig fehlenden Bezug zum Tageslicht."
      },
      {
        name: "Behandlungsraum",
        description:
          "Die Beleuchtung im Behandlungsraum muss verschiedenen Anforderungen gerecht werden. Zum einen geht es darum, das »Wohlbefinden« der Patienten zu steigern und das Aufkommen von Ängsten zu reduzieren, beispielsweise wenn eine Diagnose noch unklar ist. Darunter sollte das funktionale Licht nicht leiden, da im Behandlungsraum das Erkennen von Farben, Formen und Strukturen als Teil der Sehaufgabe wichtig und notwendig ist."
      },
      {
        name: "Warteraum",
        description:
          "Viel Zeit verbringt man im Krankenhaus oder beim Arzt im Warteraum. Der Mensch neigt dazu, in diesen Situationen eher unruhig zu sein. Die Beleuchtung in Wartezonen kann helfen, Ängste zu reduzieren und Vertrautheit und Wohlbefinden zu schaffen."
      },
      {
        name: "OP",
        description:
          "Im Operationssaal sind die funktionalen Anforderungen an die Beleuchtung besonderes wichtig: Farben, Formen und Strukturen müssen sichtbar und leicht zu unterscheiden sein. Dies gilt ganz besonders für sehr geringe Kontraste, die einfach und vor allem schnell erkannt werden müssen. Da Operationen vielfach über Stunden andauern können, sollte die Beleuchtung in diesen Fällen helfen, der Ermüdung vorzubeugen und die mentale Aktivität auf hohem Niveau zu halten."
      }
    ]
  },
  {
    name: "Pflege",
    description:
      "Die Beleuchtung soll tagsüber zur Aktivierung der Bewohner beitragen. Tagesaktivität hilft, den nächtlichen Schlaf zu verbessern. So wird der circadiane Rhythmus stabilisiert. Zum Rhythmus zählen die allgemeine und mentale Erholung einerseits und die Aktivierung andererseits. Das richtige Licht bietet zudem Informationen über die Tages- und Jahreszeit. In privat genutzten Räumen sollte die Beleuchtung vor allem Privatheit und Vertrautheit unterstützen. Das Zimmer als Rückzugsort sollte eine Atmosphäre der Erholung ausstrahlen. Gegenstände sollten einfach gefunden werden können.",
    rooms: [
      {
        name: "Gemeinschaftsraum",
        description:
          "Der Gemeinschaftsraum ist das Herz bzw. das Kommunikationszentrum in Pflegeeinrichtungen meist älterer Personen. Es ist gewünscht, dass sich die Bewohner hier über den Tag hinweg aufhalten. Tagesaktivität hilft, den nächtlichen Schlaf zu verbessern. So wird der circadiane Rhythmus stabilisiert. Zum Rhythmus zählen die allgemeine und mentale Erholung einerseits und die Aktivierung andererseits. Das richtige Licht bietet zudem Informationen über die Tages- und Jahreszeit."
      },
      {
        name: "Korridor",
        description:
          "Der Korridor ist nicht nur der Verbindungsgang zwischen den individuell eingerichteten Bewohnerzimmern und dem Gemeinschaftsraum aller Bewohner, sondern auch Versorgungsweg für die Pfleger und Treffpunkt für Bewohner, Pfleger und Besucher. Entsprechend breit gefächert sind die Anforderungen an die Beleuchtung. Dazu zählen das Erfüllen der Sehaufgaben Lesen und Erkennen von Personen, Führen, Schaffen von Sicherheit und Orientierung. Durch falsche Beleuchtung kann es schnell zu störenden Spiegelungen und Fehlwahrnehmungen kommen, die Hemmschwellen bilden. Die Vermittlung eines Sicherheitsgefühls und die Gewährleistung physischer Sicherheit sind also elementar. Das Erkennen von Formen reduziert Ängste."
      },
      {
        name: "Bewohnerzimmer",
        description:
          "Das Bewohnerzimmer stellt das persönliche Territorium eines Bewohners dar und sollte vor allem Privatheit und Vertrautheit unterstützen. Das Zimmer als Rückzugsort sollte eine Atmosphäre der Erholung ausstrahlen. Gegenstände sollten einfach gefunden werden können."
      },
      {
        name: "Schwesternzimmer",
        description:
          "Die Tätigkeiten im Schwesternzimmer sind vielfältig, ebenso vielfältig sind die Anforderungen an die Beleuchtung: Lesen und Schreiben, Arbeiten an Bildschirmen, aber auch Entspannung und Kommunikation sollen möglich sein. Dass er nahezu rund um die Uhr genutzt wird, macht den Arbeitsplatz besonders. Das Pflegepersonal sollte sich einerseits erholen, andererseits aber auch ganz besonders in der Nacht konzentriert arbeiten können."
      },
      {
        name: "Eingang/Foyer",
        description:
          "Der Eingangsbereich bzw. das Foyer sollte in Pflegeeinrichtungen einen einladenden, repräsentativen Charakter haben. Architektonische Elemente sollten betont und die Orientierung speziell für Besucher unterstützt werden."
      }
    ]
  },
  {
    name: "Industrie",
    description:
      "In der Montagehalle sind vor allem die funktionalen Anforderungen zu beachten. Je nach Sehaufgabe ergeben sich unterschiedliche Anforderungen an die Sichtbarkeit von Details, Formen und Farben. Mitunter sollen die Sehaufgaben über einen längeren Zeitraum erfüllt werden. Dann sollte der dort Arbeitende dafür allgemein und mental aktiviert werden. Eine Beleuchtung, die die Aufmerksamkeit führt, sorgt für den richtigen Lichtschwerpunkt am Ort der Sehaufgabe. Beim Einsatz von Maschinen hat die Gewährleistung der physischen Sicherheit große Bedeutung.",
    rooms: [
      {
        name: "Montagehalle",
        description:
          "In der Montagehalle sind vor allem die funktionalen Anforderungen zu beachten. Die Sehaufgabe muss definiert werden. Je nach Sehaufgabe ergeben sich unterschiedliche Anforderungen an die Sichtbarkeit von Details, Formen und Farben. In der Regel sollen die Sehaufgaben hier über einen längeren Zeitraum erfüllt werden. Der dort Arbeitende sollte dafür allgemein und mental aktiviert werden."
      },
      {
        name: "Feine Arbeiten",
        description:
          "Besteht die Sehaufgabe in dem Erkennen besonders kleiner, feiner Details, so erhöhen sich die Anforderungen an die visuelle Leistung des Arbeitenden. Auch schwache Kontraste müssen sicher und schnell erkannt werden. Eine Beleuchtung, die die Aufmerksamkeit führt, sorgt für den richtigen Lichtschwerpunkt am Ort der feinsten Sehaufgabe und der höchsten Konzentration."
      },
      {
        name: "Arbeitsplatz in Nahrungsmittel- oder chemischer Industrie",
        description:
          "In der Nahrungsmittel- bzw. chemischen Industrie sind die Anforderungen an die Beleuchtung ebenfalls an die Sehaufgabe anzupassen, wie die Abschnitte Montagehalle und Feine Arbeiten beschreiben. Zusätzlich erhöhen sich aber die Anforderungen an die Sicherheit und an die Hygiene. Bei der Beleuchtung ist auf eine sehr gute Wiedergabe von Farben zu achten."
      },
      {
        name: "Maschinenarbeiten",
        description:
          "Bei Maschinenarbeiten überwiegen automatisierte Arbeitsprozesse. Der Mensch hat eher eine qualitätsprüfende Kontrollfunktion. Beim Einsatz von Maschinen hat die Gewährleistung der physischen Sicherheit der Menschen durch schnelles und sicheres Erkennen von Gefahren große Bedeutung. Stroboskopische Effekte bei rotierenden Teilen sollten vermieden werden."
      },
      {
        name: "Kontrollarbeitsplätze",
        description:
          "Kontrollarbeitsplätze stellen nahezu ausschließlich funktionale Anforderungen: Die Farben, Materialfehlern und Qualitätsmängeln. Die Konzentration sollte über einen längeren Zeitraum erhalten Sehaufgabe besteht im schnellen und sicheren Erkennen von Details, Formen und bleiben. Andere Anforderungen treten zurück."
      },
      {
        name: "Lager",
        description:
          "Das Lager wird in der Regel nur zeitweise betreten. Auf eine gleichmäßige vertikale Beleuchtung zum Erkennen der Waren und ihren Beschriftungen in den Lager- und Regalflächen muss geachtet werden. Zur Vermeidung von Unfällen müssen Objekte und Bewegungen innerhalb der Verkehrswege schnell und zuverlässig erkannt werden. Befinden sich keine Personen im Lager, empfiehlt es sich, die Beleuchtung auszuschalten."
      },
      {
        name: "Logistik",
        description:
          "Neben den funktionalen Anforderungen, die Abschnitt Lager beschreibt, sollte in der Logistik vor allem die Orientierung unterstützt werden."
      }
    ]
  },
  {
    name: "Kunst und Kultur",
    description:
      "Bei Ausstellungen steht die perfekte Sichtbarkeit und Präsentation ausgestellter Objekte im Mittelpunkt. Die Kunstgegenstände reagieren oftmals sensibel auf Strahlung und sollten materialabhängig schonend beleuchtet werden. Zudem haben die Kuratoren oft konkrete Vorstellungen über die Präsentation der Exponate hinsichtlich der Licht- und Farbgestaltung. Eine klare Gliederung nach Raum und Rhythmik sowie die Betonung architektonischer Besonderheiten sind gefordert. Weiterhin steht die räumliche Orientierung und Aufmerksamkeitsführung im Vordergrund.",
    rooms: [
      {
        name: "Museum",
        description:
          "Im Ausstellungsraum eines Museums oder einer Galerie steht die perfekte Sichtbarkeit und Präsentation ausgestellter Objekte, beispielsweise Gemälde und Plastiken, im Mittelpunkt. Die Kunstgegenstände reagieren oftmals sensibel auf kurzwellige (UV) und langwellige (IR) Strahlung und sollten materialabhängig schonend beleuchtet werden. Zudem haben die Kuratoren oft konkrete Vorstellungen über die Präsentation der Exponate hinsichtlich der Licht- und Farbgestaltung. Auch die Architektur spielt für die Beleuchtung von Museen und Ausstellungen als Einflussgröße eine wesentliche Rolle. Eine klare Gliederung nach Raum und Rhythmik sowie die Betonung architektonischer Besonderheiten sind gefordert."
      },
      {
        name: "Theater",
        description:
          "Diese Publikation bezieht sich nicht auf die Bühnenbeleuchtung, sondern auf das Theater als Veranstaltungsort. Betrachtet wird der Bau, insbesondere das Foyer und der Zuschauerraum. Viele Theater sind historische Gebäude, bei denen die Betonung der Architektur und die räumliche Orientierung im Vordergrund stehen. Die Beleuchtung sollte eine angenehme Schattigkeit zum Wahrnehmen von Gesichtern und plastischen Objekten sowie zur Aufmerksamkeitsführung beachten."
      },
      {
        name: "Messe und Ausstellungshalle",
        description:
          "In räumlich großzügigen offenen Hallen, wie sie z. B. Messehallen darstellen, ist die Ordnung und Unterscheidbarkeit von Bereichen und Nutzungszonen zu beachten. Die Anforderung der Ermöglichung einer räumlichen Orientierung sowie die Ausrichtung auf das Geschehen ist besonders hoch."
      },
      {
        name: "Sakralbauten / Kirchen",
        description:
          "Sakralbauten sind Orte der Ruhe und Besinnung, aber auch der festlichen Rituale und Zeremonien. Die Beleuchtung sollte den Charakter des sakralen Raums und der unterschiedlicher Stimmungen sakraler Handlungen adäquat unterstützen."
      }
    ]
  },
  {
    name: "Hotel und Restaurant",
    description:
      "Im Restaurant sind Atmosphäre und Charakter ausschlaggebend für das Wohlbefinden der Gäste. In der Regel soll ein Restaurant zum Entspannen einladen und eine private, wenn nicht gar vertraute Atmosphäre bieten. Neben diesen Anforderungen ist es natürlich auch notwendig, die Farben der Speisen und Getränke, aber auch die der Tischpartner natürlich und unverfälscht zu erkennen. Das Hotelzimmer ist für den Gast ein privater Raum. Wohlbefinden, Erholung und Privatheit stehen im Vordergrund. Die persönliche Kontrolle über die Raum- und Lichtsituation steigert die Akzeptanz.",
    rooms: [
      {
        name: "Restaurant, Speisesaal",
        description:
          "Im Restaurant sind Atmosphäre und Charakter ausschlaggebend für das Wohlbefinden der Gäste. In der Regel soll ein Restaurant zum Entspannen einladen und eine private, wenn nicht gar vertraute Atmosphäre bieten. Neben diesen Anforderungen ist es natürlich auch notwendig, die Farben der Speisen und Getränke, aber auch die der Tischpartner natürlich und unverfälscht zu erkennen."
      },
      {
        name: "Kassen",
        description:
          "Für die Beleuchtung der Kassen gelten die gleichen Anforderungen wie für die Beleuchtung von Arbeitsplätzen in Abschnitt Büro. Auf die natürliche Farbigkeit von Speisen ist auch an der Kasse zu achten."
      },
      {
        name: "Küche",
        description:
          "In der Küche sind die Anforderungen an die Sicherheit und an die Hygiene besonders hoch. Außerdem sollten die visuellen Anforderungen an das Erkennen von Details, Formen und Farben erfüllt werden. Die visuelle Leistung des Personals sollte über die gesamte Arbeitszeit hoch sein."
      },
      {
        name: "Hotelzimmer",
        description:
          "Ein Hotelzimmer ist für den Gast für die – vorübergehende – Dauer seines Aufenthalts ein privater Raum. Wohlbefinden, Erholung und Privatheit stehen im Vordergrund. Die persönliche Kontrolle über die Raum- und Lichtsituation steigert die Akzeptanz."
      },
      {
        name: "Empfang/Lobby",
        description:
          "Empfangsbereich und Rezeption müssen verschiedenen wesentlichen Aufgaben gerecht werden. Zunächst ist das Erkennen der Sehaufgabe, d.h. Schreiben, Lesen und Computerarbeit an der Rezeption sowie das wechselseitige Erkennen von Gesichtern, zu gewährleisten. Neben der Fassade dienen Foyer und Empfangsbereich als Visitenkarte eines Hotels und stellen Anforderungen an die Architektur."
      },
      {
        name: "Korridor",
        description:
          "In den Korridoren eines Hotels steht die räumliche Orientierung an oberster Stelle. Zimmer und Fluchtwege sollen schnell und zuverlässig gefunden werden."
      }
    ]
  },
  {
    name: "Shop",
    description:
      "Im Verkaufsbereich steht die Warenpräsentation im Vordergrund. Die Waren, ihre Farben, Details und Formen, sollen schnell und gut erkennbar sein. Die Beleuchtung kann helfen, die Aufmerksamkeit zu lenken, Aufmerksamkeitsschwerpunkte zu setzten und die räumliche Orientierung zu unterstützen. Ein Schaufenster soll so gestaltet und beleuchtet sein, dass es die Aufmerksamkeit und das Interesse eines Betrachters innerhalb weniger Sekunden weckt. Das schnelle Erkennen von Form, Farbe und Objekt sind maßgeblich.",
    rooms: [
      {
        name: "Verkaufsbereich",
        description:
          "Im Verkaufsbereich steht die Warenpräsentation im Vordergrund. Die Waren, ihre Farben, Details und Formen, sollen schnell und gut erkennbar sein. Die Beleuchtung kann helfen, die Aufmerksamkeit zu lenken, Aufmerksamkeitsschwerpunkte zu setzten und die räumliche Orientierung zu unterstützen. Waren sollen vor schädigender Strahlung geschützt werden."
      },
      {
        name: "Kassenbereich",
        description:
          "In den Kassenbereichen soll das Licht den funktionalen Anforderungen wie in Kapitel Kassen dargestellt entsprechen."
      },
      {
        name: "Lager",
        description:
          "Für Lager gelten die in Kapitel Lager aufgelisteten Anforderungen."
      },
      {
        name: "Schaufenster",
        description:
          "Ein Schaufensters soll so gestaltet und beleuchtet sein, dass es die Aufmerksamkeit und das Interesse eines Betrachters innerhalb weniger Sekunden des Anschauens weckt, sodass er den Shop betritt. Das schnelle Erkennen von Form, Farbe und Objekt sind maßgeblich."
      },
      {
        name: "Umkleidekabine",
        description:
          "In der Umkleidekabine fällt oft die Kaufentscheidung für ein Kleidungsstück. Wichtig ist die sehr gute Erkennbarkeit der Farben und der Formen. Mensch und Kleidung sollen vorteilhaft und natürlich erscheinen. Die Kabine soll einladend sein."
      },
      {
        name: "Supermarkt",
        description:
          "Das Einkaufen im Supermarkt gehört für viele zum Alltag. Die schnelle Orientierung und Führung, das gute und sichere Identifizieren der Waren, das Lenken der Aufmerksamkeit auf besondere Angebote und das vertraute Erscheinungsbild stehen im Vordergrund. Farben und Formen sollten klar erkannt werden können."
      }
    ]
  }
];

@Component({
  components: {
    VContainer,
    VRow,
    VCol,
    VList,
    VListItem,
    VListItemContent,
    VListItemAction,
    VListItemTitle,
    VListItemSubtitle,
    VSubheader,
    VBtn,
    VIcon,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VDialog
  }
})
export default class Rooms extends Vue {
  name = "Rooms";
  categories = categories;
  iconInfo = mdiInformation;
  infoText = "";
  infoTitle = "";
  infoModal = false;

  async showInfo(info: string, title = "") {
    this.infoText = info;
    this.infoTitle = title;
    this.infoModal = false;
    await Vue.nextTick();
    this.infoModal = true;
  }
}
</script>
