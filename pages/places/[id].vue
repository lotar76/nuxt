<template>
 <div class="">
     <header-card
         @share="showShare"
         :info="place.info"
     />
   <dialog-form
       :showDialog="show"
       @close="closeDialogShare"
       @share="(text)=>shared(text)"
       :item="place"
   />

 </div>

</template>

<script lang="ts" setup>

// import DialogForm from "#build/components/Dialog.vue";



import {env} from "unenv";

definePageMeta({
  layout: 'empty'
})

import {useRoute, useRouter, useRuntimeConfig} from "nuxt/app";
import {computed} from "@vue/reactivity";
import {HeaderCard,DialogForm} from "#components"

// const Url_base =  window.location.protocol +'//'+ window.location.host+'/';

const config = useRuntimeConfig()
const route = useRoute()
const { currentRoute } = useRouter();

// const Url_base = config.base_url
const Url_base = 'https://inkstagram.ru'



const placeId = route.params.id
const isMobile = function () {
  return !navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/iPhone|iPad|iPod/i);

}


const items: any[] = [
  {
    id: '1',
    design: 1,
    info: {
      title: "My adventure at Leipzig",
      share_text: 'Today I’ve visited the sights of Leipzig with Willy and it was something special. Leipzig is exclusive. Here I want to share some impressions.',
      subtitle: "24 Oktober, Leipziger",
      text: ' Today I visited the biggest city in Saxon Germany, Leipzig with <a target="_blank" href="https://www.facebook.com/profile.php?id=100020893964935">Willy</a>. Leipzig is known for its\n' +
          '      university and\n' +
          '      fairs, because of which it even got the unofficial name Messestadt. Leipzig is a city of cathedrals and museums, a\n' +
          '      city with a rich history and famous inhabitants. This city can be called the musical capital of Europe, where the\n' +
          '      pillars of classical music lived and created. Leipzig is the city of the Battle of Nations and the cradle of the\n' +
          '      "peaceful revolution”.',
      image: 'marka.png',
      share_btn: 'Share',
      share_title: 'Share your journey with your loved ones'
    },
    places: [
      {
        id: 1,
        card: {size: 261, position: 'left',},
        arrow: {type: 1, left: 10, top: 27},
        image: {size: 182, position: 'left', src: '1.jpg'},
        title: 'The Church of St. Thomas',
        text: '<b>The Church of St. Thomas </b>is a late Gothic Lutheran church. Great composers were playing in its walls. J.S. Bach is buried here. The Church of St Thomas is known for its Boys Novice Choir, which has existed since 1212'
      },
      {
        id: 1,
        card: {size: 215, position: 'right', top: 100},
        arrow: {type: 2, left: -2, top: 101},
        image: {size: 162, position: 'right', src: '2.jpg'},
        title: 'The Market Square',
        text: '<b>The Market Square</b> was established many centuries ago in a place where knights gathered. Here every year the best city markets and festivals are held. The Old Town Hall (now the Museum of History) was built in 1509. The Great Ballroom is used for concerts. '
      },
      {
        id: 1,
        card: {size: 350, position: 'right', top: 100},
        arrow: {type: 3, left: 27, top: 105},
        image: {size: 224, position: 'left', src: '3.jpg'},
        title: 'The church of Saint Nicholas',
        text: '<b>The church of Saint Nicholas</b>, (XII century) had time to visit the Romanesque, Gothic, and now in the Baroque appearance. Here was the first Lutheran service of Leipzig. In later times, the church became the site of the Monday gatherings - peaceful demonstrations that eventually led to German reunification in 1989.'
      },
      {
        id: 1,
        card: {size: 303, position: 'right', top: 120},
        arrow: {type: 4, left: 40, top: 105},
        image: {size: 206, position: 'left', src: '4.jpg'},
        title: 'The church of Saint Nicholas',
        text: 'The new town hall is the tallest in Germany (115m), it is more like a palace or a castle. The building was completed in 1905. '
      },
      {
        id: 1,
        card: {size: 250, position: 'left', top: 100},
        arrow: {type: 5, left: 20, top: 90},
        image: {size: 162, position: 'left', src: '5.jpg'},
        title: 'The church of Saint Nicholas',
        text: 'One of the most beautiful historical landmarks of Leipzig. The old town hall is considered one of the best examples of German architecture of the Renaissance.\n' +
            'In the museum there is a handwritten copy of «Saxon zerzal» - a legal collection of the XIII century and a code of laws of the Holy Roman Empire'
      },
      {
        id: 1,
        card: {size: 307, position: 'right', top: 100},
        arrow: {type: 6, left: 45, top: 100},
        image: {size: 230, position: 'right', src: '6.jpg'},
        title: 'The church of Saint Nicholas',
        text: 'The monument "Battle of the Nations" is dedicated to the epic battle of 1813, which led to a decisive victory of Prussian, Austrian and Russian troops over Napoleon’s army. It is a 91-meter colossus'
      },
      {
        id: 1,
        card: {size: 216, position: 'left', top: 100},
        arrow: {type: 7, left: 100, top: 80},
        image: {size: 162, position: 'left', src: '7.jpg'},
        title: 'The church of Saint Nicholas',
        text: 'The massive Plaza Augusta is surrounded by some of the most famous buildings in the city, including Gevandhaus (the main concert hall of the city) and the opera house.'
      },
      {
        id: 1,
        card: {size: 350, position: 'center', top: 100},
        image: {size: 350, position: 'center', src: '8.jpg'},
        title: 'The church of Saint Nicholas',
        text: 'St. Peter’s Church is a Gothic cathedral of the Middle Ages. The elegant bell tower and the main portal with a stained glass rose attract special attention.'
      },
    ]
  },
  {
    id: '2',
    design: 1,
    info: {
      title: "Mein Abenteuer in der Leipziger Notenspur",
      share_text: 'Heute habe ich mit Kate die musikalische Hauptstadt Europas besucht, die Stadt Leipzig. Es war etwas Besonderes. Hier möchte ich einige Eindrücke teilen.',
      subtitle: "24 Oktober, Leipziger",
      text: ' Heute habe ich mit <a target="_blank" href="https://www.facebook.com/profile.php?id=100020893964935">Kate</a> die musikalische Hauptstadt Europas besucht, die Stadt Leipzig. Hier lebte Johann Sebastian Bach mehr als zwanzig Jahre lang, schuf Musik und arbeitete mit dem Knabenchor der Kirche, hier gibt es seit 1904 ein Musikfest ihm zu Ehren, hier lebte und arbeitete der Autor des Hochzeitsmarsches Mendelssohn, hier komponierten Wagner und Schumann.',
      image: 'main-min-sm.jpg',
      share_btn: 'Teilen',
      share_title: 'Teilen Sie Ihre Reise mit Ihren Lieben'
    },
    places: [
      {
        id: '1',
        card: {size: 261, position: 'left',},
        arrow: {type: 1, left: 30, top: 40},
        image: {size: 182, position: 'left', src: '01-min.jpg'},
        title: 'Neues Gewandhaus',
        text: ' Das Neue Gewandhaus zu Leipzig wurde im Oktober 1981 eröffnet. Ist der einzige Konzerthausneubau der DDR. Das Gewandhaus zu Leipzig ist Austragungsort von rund 800 Veranstaltungen im Jahr. Der große Saal bietet insgesamt 1.900 Besuchern Platz und beherbergt die majestätische Schuke-Orgel Das Neue Gewandhaus zu Leipzig wurde im Oktober 1981 eröffnet. Ist der einzige Konzerthausneubau der DDR. Das Gewandhaus zu Leipzig ist Austragungsort von rund 800 Veranstaltungen im Jahr. Der große Saal bietet insgesamt 1.900 Besuchern Platz und beherbergt die majestätische Schuke-Orgel Das Neue Gewandhaus zu Leipzig wurde im Oktober 1981 eröffnet. Ist der einzige Konzerthausneubau der DDR. Das Gewandhaus zu Leipzig ist Austragungsort von rund 800 Veranstaltungen im Jahr. Der große Saal bietet insgesamt 1.900 Besuchern Platz und beherbergt die majestätische Schuke-Orgel Das Neue Gewandhaus zu Leipzig wurde im Oktober 1981 eröffnet. Ist der einzige Konzerthausneubau der DDR. Das Gewandhaus zu Leipzig ist Austragungsort von rund 800 Veranstaltungen im Jahr. Der große Saal bietet insgesamt 1.900 Besuchern Platz und beherbergt die majestätische Schuke-Orgel Das Neue Gewandhaus zu Leipzig wurde im Oktober 1981 eröffnet. Ist der einzige Konzerthausneubau der DDR. Das Gewandhaus zu Leipzig ist Austragungsort von rund 800 Veranstaltungen im Jahr. Der große Saal bietet insgesamt 1.900 Besuchern Platz und beherbergt die majestätische Schuke-Orgel'
      },
      {
        id: 2,
        card: {size: 215, position: 'right', top: 100},
        arrow: {type: 2, left: -2, top: 101},
        image: {size: 162, position: 'right', src: '02-min.jpg'},
        title: 'Mendelssohn-Haus',
        text: 'Das Mendelssohn-Haus ist die einzig erhalten gebliebene Wohnstätte des Komponisten Felix Mendelssohn Bartholdy, der 1847 in Leipzig starb. Es wird heute als Musiksalon genutzt und ist zugleich das weltweit einzige Mendelssohn-Museum. Hier wurde u.a. das Oratorium Elias vollendet (1846).'
      },
      {
        id: 3,
        card: {size: 350, position: 'right', top: 100},
        arrow: {type: 3, left: 27, top: 105},
        image: {size: 224, position: 'left', src: '03-min.jpg'},
        title: 'Grieg-Begegnungsstätte',
        text: 'Im Haus Talstraße 10 weilte Edvard Grieg (1843–1907) von 1876 bis zu seinem Todesjahr oft in Begleitung seiner Frau, der Sängerin Nina Grieg, als Gast seiner Verleger vom C.F. Hier entstand 1888 Griegs berühmte 1. Peer-Gynt-Suite. Heute befindet sich hier die Grieg-Begegnungsstätte.'
      },
      {
        id: 4,
        card: {size: 303, position: 'right', top: 120},
        arrow: {type: 4, left: 40, top: 105},
        image: {size: 206, position: 'left', src: '04-min.jpeg'},
        title: 'Ehemalige Musikbibliothek Peters',
        text: 'Die Musikbibliothek Peters wurde von Max Abraham gegründet, dem Inhaber des Musikverlags C.F. Peters. Eröffnet wurde sie Anfang 1894 in der Königstraße 26 (heute Goldschmidtstraße), und zwar als die weltweit erste öffentliche Fachbibliothek ihrer Art. Noch dazu durfte sie – ebenfalls weltweit erstmalig – auch von Frauen benutzt werden. '
      },
      {
        id: 5,
        card: {size: 250, position: 'left', top: 100},
        arrow: {type: 5, left: 20, top: 80},
        image: {size: 162, position: 'left', src: '05-min.jpg'},
        title: 'Grassi Museum für Musikinstrumente',
        text: '1Das zur Universität gehörende Grassimuseum zeigt Ihnen, wie sich die Instrumentenbauer ab dem 16. Jahrhundert auf die Suche nach dem vollkommenen Klang begeben haben. Die beeindruckenden handwerklichen und künstlerischen Fähigkeiten lassen sich anhand von rund 5.000 Kostbarkeiten erleben. '
      },
      {
        id: 6,
        card: {size: 307, position: 'right', top: 70},
        arrow: {type: 6, left: 50, top: 105},
        image: {size: 230, position: 'right', src: '06-min.jpg'},
        title: 'Alter Johannisfriedhof',
        text: 'Auf dem ältesten kommunalen Friedhof Leipzigs, mit seinen grünen Epheuranken, den schmuckvollen Grabmälern und dem alten Baumbestand, herrscht eine verwunschene Atmosphäre, die vor allem Freunde der Historik und Romantik zum verweilen einlädt. Bereits 1536 ernannte Herzog Georg diesen Ort zum offiziellen Begräbnisplatz. Heute finden hier keine Bestattungen mehr statt und so dient der Friedhof als Denkmal für Leipzigs Geschichte von Musik über Wissenschaft bis hin zur Politik.'
      },
      {
        id: 7,
        card: {size: 300, position: 'left', top: 150},
        arrow: {type: 7, left: 90, top: 90},
        image: {size: 200, position: 'left', src: '07-min.jpg'},
        title: 'Schumann-Haus',
        text: 'Die frühere Wohnstätte des Schumann-Ehepaares umfasst eine Dauerausstellung, die über das Leben der beiden berühmten Musiker informiert. Der Komponist Robert Schumann (1810–1856) und die Pianistin Clara Wieck (1819–1896) bezogen nach ihrer Eheschließung im September 1840 das "Logis Erste Etage rechts" in diesem klassizistischen Haus. Eine Zeit großen Glücks und der fruchtbaren Zusammenarbeit begann und währte bis zum Umzug nach Dresden Ende 1844.'
      },
      {
        id: 8,
        card: {size: 350, position: 'center', top: 100},
        arrow: {type: 3, left: 20, top: 105},
        image: {size: 300, position: 'center', src: '08-min.jpeg'},
        title: 'Grafisches Viertel – Musikverlage (Notenwand)',
        text: 'Leipzig entwickelte sich im 19. Jahrhundert zu einer europäischen Musikmetropole ersten Ranges. Eine besondere Bedeutung spielte dabei das Verlagswesen, das vorrangig im Grafischen Viertel östlich des Leipziger Stadtzentrums angesiedelt war. Die älteste Institution und zugleich der älteste Musikverlag der Welt war der Verlag Breitkopf. Dieser wurde 1719 durch Bernhard Christoph Breitkopf gegründet.'
      },
      {
        id: 9,
        card: {size: 300, position: 'center', top: 100},
        arrow: {type: 5, left: -10, top: 95},
        image: {size: 182, position: 'left', src: '09-min.jpg'},
        title: 'Wagner-Denkmal',
        text: 'Die im Wagner-Jahr 1983 errichtete Richard-Wagner-Büste geht auf einen Entwurf des Leipziger Bildhauers Max Klinger zurück und besteht aus einem Sandsteinsockel mit Bronzeplastik, diese hergestellt 1982 in der Firma Noack.'
      },
      {
        id: 10,
        card: {size: 200, position: 'center', top: 100},
        arrow: {type: 2, left: 0, top: 100},
        image: {size: 150, position: 'center', src: '10-min.jpg'},
        title: 'Oper Leipzig',
        text: 'Die Oper Leipzig – bestehend aus Oper, Musikalische Komödie und Leipziger Ballett – ist die drittälteste bürgerliche Musiktheaterbühne Europas. Geprägt wird der herausragende internationale Ruf durch das Leipziger Gewandhausorchester, bedeutende Solisten, einen preisgekrönten Chor und das Leipziger Ballett.',
      },
      {
        id: 11,
        card: {size: 261, position: 'left', top: 100},
        arrow: {type: 6, left: 60, top: 105},
        image: {size: 200, position: 'center', src: '11-min.jpg'},
        title: 'Alte Nikolaischule',
        text: 'Als erste städtische Bürgerschule Leipzigs gehört die Alte Nikolaischule am Nikolaikirchhof zu den wertvollsten kulturellen Denkmälern der Stadt. Sie nahm im Jahr 1512 erstmals den Schulbetrieb auf. Große Persönlichkeiten wie Gottfried Wilhelm Leibniz, Johann Gottfried Seume oder Richard Wagner gingen hier zur Schule.',
      },
      {
        id: 12,
        card: {size: 300, position: 'left', top: 100},
        arrow: {type: 7, left: 90, top: 90},
        image: {size: 150, position: 'left', src: '12-min.jpg'},
        title: 'Nikolaikirche',
        text: 'Die spätgotische Nikolaikirche, deren Innenraum um 1790 klassizistisch umgestaltet wurde, ist eine der beiden erhaltenen Leipziger Kirchen, für deren Kirchenmusik Johann Sebastian Bach (1685–1750) verantwortlich war. Die Nikolaikirche ist die älteste und größte Kirche in Leipzig. Im Herbst 1989 war sie zentraler Ausgangspunkt der Friedlichen Revolution in der DDR.\n',
      },
      {
        id: 13,
        card: {size: 300, position: 'center', top: 110},
        arrow: {type: 1, left: 0, top: 70},
        image: {size: 220, position: 'left', src: '13-min.jpg'},
        title: 'Altes Rathaus',
        text: 'Das Alte Rathaus ist Leipzigs Wahrzeichen und zugleich auch das historische Gedächtnis der Stadt.\n' +
            'Im Alten Rathaus befinden sich wertvolle Exponate der Leipziger Musikgeschichte. In der Ratsstube unterschrieb Johann Sebastian Bach, die wohl berühmteste Person, die je ihren Fuß in das Leipziger Rathaus setzte, im Mai 1723 seinen städtischen Anstellungsvertrag als Thomaskantor und "director musices".\n',
      },
      {
        id: 14,
        card: {size: 261, position: 'right', top: 200},
        arrow: {type: 4, left: 25, top: 100},
        image: {size: 182, position: 'right', src: '14-min.jpg'},
        title: 'Museum der bildenden Künste – Beethoven',
        text: 'Im Museum der bildenden Künste ist eines der weltweit bedeutendsten musikbezogenen Werke der bildenden Kunst ausgestellt: Klingers Beethoven-Plastik.\n' +
            'Obwohl er nur ein Mal als aufstrebender junger Pianist und Komponist selbst in Leipzig weilte, hatte Beethoven enge Beziehungen zu Leipzig. Ein wichtiger Teil seiner Werke wurde in Leipzig verlegt, zunächst beim 1800 gegründeten "Bureau de Musique" (später C. F. Peters).\n',
      },
      {
        id: 15,
        card: {size: 261, position: 'left', top: 100},
        arrow: {type: 3, left: 65, top: 95},
        image: {size: 182, position: 'left', src: '15-min.jpg'},
        title: 'Zum Arabischen Coffe Baum',
        text: 'Seit 1711 wird in diesem Hause "Zum Arabischen Coffe Baum" Kaffee ausgeschenkt. Bis in die Gegenwart hinein beherbergt es Gaststätte und Kaffeeausschank (heute zugleich auch ein Kaffeemuseum).\n' +
            'Dabei erhielt das Café-Restaurant bereits seit dem Jahre 1694 prominenten Zuspruch, als sich Robert Schumann hier regelmäßig mit seinen Davidsbündlern zum Stammtisch traf.\n',
      },
      {
        id: 16,
        card: {size: 261, position: 'right', top: 100},
        arrow: {type: 2, left: 0, top: 100},
        image: {size: 250, position: 'left', src: '16-min-min.jpg'},
        title: 'Hôtel de Saxe',
        text: 'Das Haus war Quartier vieler berühmter Besucher Leipzigs. Beispielsweise nächtigte hier 1796 Wolfgang Amadeus Mozarts Witwe Constanze. Im Gepäck hatte sie die Partitur des Requiems ihres verstorbenen Mannes, so dass es im April 1796 zur Leipziger Erstaufführung des Werkes kommen konnte.',
      },
      {
        id: 17,
        card: {size: 261, position: 'left', top: 100},
        arrow: {type: 1, left: 15, top: 30},
        image: {size: 200, position: 'left', src: '17-min.jpg'},
        title: 'Thomaskirche',
        text: 'Die Thomaskirche ist der Ausgangspunkt der Musikstadt Leipzig. Hier wurde im Jahre 1212 das Augustiner Chorherrnstift gegründet und mit ihm der Thomanerchor. Sie war 27 Jahre lang die Wirkungsstätte von Johann Sebastian Bach, welcher von 1723 bis 1750 Thomaskantor in Leipzig war.\n',
      },
      {
        id: 18,
        card: {size: 350, position: 'center', top: 100},
        arrow: {type: 2, left: 20, top: 102},
        image: {size: 200, position: 'right', src: '18-min.jpeg'},
        title: 'Bach-Museum',
        text: 'Das Bach-Archiv mit dem dazugehörigen Bach-Museum finden Sie im Bosehaus. Das Gebäude gilt als eines der bedeutendsten Renaissancebauten Leipzigs. Gleichzeitig ist es eines der ältesten erhaltenen Gebäude an der Südseite des Thomaskirchhofs.\n' +
            'Viele seiner bedeutendsten Kompositionen sind in den 27 Jahren entstanden, die Bach in Leipzig lebte, u. a. die berühmte Johannes- und Matthäuspassion.\n',
      },
      {
        id: 19,
        card: {size: 261, position: 'left', top: 100},
        arrow: {type: 3, left: 50, top: 100},
        image: {size: 182, position: 'left', src: '19-min-min.jpeg'},
        title: 'Standort Geburtshaus von Clara Wieck',
        text: 'Clara Wiecks Vater, Friedrich Wieck, bewohnte von 1818 an als Klavierpädagoge, Instrumentenhändler und Inhaber einer musikalischen Leihbibliothek bis 1821 das Eckhaus zwischen Preußergäßchen (Nr. 48) und Neumarkt (Nr. 28), in dem Clara Wieck 1819 geboren wurde. Bis zur Zerstörung des Hauses "Hohe Lilie" am Ende des 2. Weltkrieges befand sich über der Wohnungstür zur ersten Etage eine Gedenktafel, die an die bedeutende Pianistin erinnerte.',
      },
      {
        id: 20,
        card: {size: 261, position: 'right', top: 105},
        arrow: {type: 2, left: 10, top: 100},
        image: {size: 160, position: 'left', src: '20-min-min.jpeg'},
        title: 'Standort Altes Konservatorium',
        text: 'Die erste höhere Bildungsanstalt für Musik im Gebiet des heutigen Deutschlands, das Leipziger Konservatorium der Musik, wurde am 2. April 1843 im Hof des alten Gewandhauses am Neumarkt eröffnet. Berühmtester Mitbegründer war der damalige Gewandhauskapellmeister Felix Mendelssohn Bartholdy (1809 - 1847).',
      },
      {
        id: 21,
        card: {size: 350, position: 'left', top: 105},
        arrow: {type: 5, left: 10, top: 100},
        image: {size: 300, position: 'right', src: '21-min-min.jpeg'},
        title: 'Standort Erstes Gewandhaus',
        text: 'Das erste Leipziger Gewandhaus wurde 1498 als zweiflügliges Gebäude an Gewandgäßchen und Universitätsstraße errichtet. Es wurde zunächst als Kaufhalle der Tuchmacher und zugleich als Zeughaus für stadteigene Waffen und Rüstungen genutzt. 1781 wurde der durch die Stadt Leipzig errichtete Konzertsaal eröffnet und das Orchester erhielt seinen Namen "Gewandhausorchester".',
      },
      {
        id: 22,
        card: {size: 250, position: 'right', top: 105},
        arrow: {type: 7, left: 35, top: 98},
        image: {size: 182, position: 'center', src: '22-min.jpg'},
        title: 'Paulinum – Aula und Universitätskirche St. Pauli',
        text: 'Während der fast 600-jährigen Universitätsgeschichte hatten besonders Studenten immer wieder großen Anteil am städtischen Musikleben. Sie wirkten in den Collegia musica von Telemann und Bach mit, spielten in Kaffeehäusern, in der Oper oder in Leipziger Kirchen und schlossen sich zu Chören zusammen. Beispielsweise die 1822 gegründete Universitätssängerschaft St. Pauli, die 1907/08 von Max Reger geleitet wurde.',
      },
      {
        id: 23,
        card: {size: 350, position: 'center', top: 150},
        image: {size: 350, position: 'center', src: '23.jpeg'},
        title: 'MDR Würfel – Orchester und Chöre des MDR',
        text: 'Der Dresdner Architekt Peter Kulka entwarf den schwarz glänzenden Kubus, der mit dem Gewandhaus verbunden und 2001 fertig gestellt wurde. Der Kubus am Augustusplatz wurde speziell für Proben und Tonaufnahmen des MDR Rundfunkchors und des MDR Sinfonieorchester gebaut.',
      },

    ]
  },
  {
    id: '3',
    design: 2,
    info: {
      title: "Mein Abenteuer in der Leipziger Notenspur",
      share_text: 'Heute habe ich mit Kate die musikalische Hauptstadt Europas besucht, die Stadt Leipzig. Es war etwas Besonderes. Hier möchte ich einige Eindrücke teilen.',
      subtitle: "24 Oktober, Leipziger",
      text: ' Heute habe ich mit <a target="_blank" href="https://www.facebook.com/profile.php?id=100020893964935">Kate</a> die musikalische Hauptstadt Europas besucht, die Stadt Leipzig. Hier lebte Johann Sebastian Bach mehr als zwanzig Jahre lang, schuf Musik und arbeitete mit dem Knabenchor der Kirche, hier gibt es seit 1904 ein Musikfest ihm zu Ehren, hier lebte und arbeitete der Autor des Hochzeitsmarsches Mendelssohn, hier komponierten Wagner und Schumann.',
      image: 'main-min.jpg',
      share_btn: 'Teilen',
      share_title: 'Teilen Sie Ihre Reise mit Ihren Lieben'
    },
    places: [
      {
        id: '1',
        card: {size: 261, position: 'left',},
        arrow: {type: 1, left: 30, top: 40},
        image: {size: 182, position: 'left', src: '01-min.jpg'},
        title: 'Neues Gewandhaus',
        text: ' Das Neue Gewandhaus zu Leipzig wurde im Oktober 1981 eröffnet. Ist der einzige Konzerthausneubau der DDR. Das Gewandhaus zu Leipzig ist Austragungsort von rund 800 Veranstaltungen im Jahr. Der große Saal bietet insgesamt 1.900 Besuchern Platz und beherbergt die majestätische Schuke-Orgel Das Neue Gewandhaus zu Leipzig wurde im Oktober 1981 eröffnet. Ist der einzige Konzerthausneubau der DDR. Das Gewandhaus zu Leipzig ist Austragungsort von rund 800 Veranstaltungen im Jahr. Der große Saal bietet insgesamt 1.900 Besuchern Platz und beherbergt die majestätische Schuke-Orgel Das Neue Gewandhaus zu Leipzig wurde im Oktober 1981 eröffnet. Ist der einzige Konzerthausneubau der DDR. Das Gewandhaus zu Leipzig ist Austragungsort von rund 800 Veranstaltungen im Jahr. Der große Saal bietet insgesamt 1.900 Besuchern Platz und beherbergt die majestätische Schuke-Orgel Das Neue Gewandhaus zu Leipzig wurde im Oktober 1981 eröffnet. Ist der einzige Konzerthausneubau der DDR. Das Gewandhaus zu Leipzig ist Austragungsort von rund 800 Veranstaltungen im Jahr. Der große Saal bietet insgesamt 1.900 Besuchern Platz und beherbergt die majestätische Schuke-Orgel Das Neue Gewandhaus zu Leipzig wurde im Oktober 1981 eröffnet. Ist der einzige Konzerthausneubau der DDR. Das Gewandhaus zu Leipzig ist Austragungsort von rund 800 Veranstaltungen im Jahr. Der große Saal bietet insgesamt 1.900 Besuchern Platz und beherbergt die majestätische Schuke-Orgel'
      },
      {
        id: 2,
        card: {size: 215, position: 'right', top: 100},
        arrow: {type: 2, left: -2, top: 101},
        image: {size: 162, position: 'right', src: '02-min.jpg'},
        title: 'Mendelssohn-Haus',
        text: 'Das Mendelssohn-Haus ist die einzig erhalten gebliebene Wohnstätte des Komponisten Felix Mendelssohn Bartholdy, der 1847 in Leipzig starb. Es wird heute als Musiksalon genutzt und ist zugleich das weltweit einzige Mendelssohn-Museum. Hier wurde u.a. das Oratorium Elias vollendet (1846).'
      },
      {
        id: 3,
        card: {size: 350, position: 'right', top: 100},
        arrow: {type: 3, left: 27, top: 105},
        image: {size: 224, position: 'left', src: '03-min.jpg'},
        title: 'Grieg-Begegnungsstätte',
        text: 'Im Haus Talstraße 10 weilte Edvard Grieg (1843–1907) von 1876 bis zu seinem Todesjahr oft in Begleitung seiner Frau, der Sängerin Nina Grieg, als Gast seiner Verleger vom C.F. Hier entstand 1888 Griegs berühmte 1. Peer-Gynt-Suite. Heute befindet sich hier die Grieg-Begegnungsstätte.'
      },
      {
        id: 4,
        card: {size: 303, position: 'right', top: 120},
        arrow: {type: 4, left: 40, top: 105},
        image: {size: 206, position: 'left', src: '04-min.jpeg'},
        title: 'Ehemalige Musikbibliothek Peters',
        text: 'Die Musikbibliothek Peters wurde von Max Abraham gegründet, dem Inhaber des Musikverlags C.F. Peters. Eröffnet wurde sie Anfang 1894 in der Königstraße 26 (heute Goldschmidtstraße), und zwar als die weltweit erste öffentliche Fachbibliothek ihrer Art. Noch dazu durfte sie – ebenfalls weltweit erstmalig – auch von Frauen benutzt werden. '
      },
      {
        id: 5,
        card: {size: 250, position: 'left', top: 100},
        arrow: {type: 5, left: 20, top: 80},
        image: {size: 162, position: 'left', src: '05-min.jpg'},
        title: 'Grassi Museum für Musikinstrumente',
        text: '1Das zur Universität gehörende Grassimuseum zeigt Ihnen, wie sich die Instrumentenbauer ab dem 16. Jahrhundert auf die Suche nach dem vollkommenen Klang begeben haben. Die beeindruckenden handwerklichen und künstlerischen Fähigkeiten lassen sich anhand von rund 5.000 Kostbarkeiten erleben. '
      },
      {
        id: 6,
        card: {size: 307, position: 'right', top: 70},
        arrow: {type: 6, left: 50, top: 105},
        image: {size: 230, position: 'right', src: '06-min.jpg'},
        title: 'Alter Johannisfriedhof',
        text: 'Auf dem ältesten kommunalen Friedhof Leipzigs, mit seinen grünen Epheuranken, den schmuckvollen Grabmälern und dem alten Baumbestand, herrscht eine verwunschene Atmosphäre, die vor allem Freunde der Historik und Romantik zum verweilen einlädt. Bereits 1536 ernannte Herzog Georg diesen Ort zum offiziellen Begräbnisplatz. Heute finden hier keine Bestattungen mehr statt und so dient der Friedhof als Denkmal für Leipzigs Geschichte von Musik über Wissenschaft bis hin zur Politik.'
      },
      {
        id: 7,
        card: {size: 300, position: 'left', top: 150},
        arrow: {type: 7, left: 90, top: 90},
        image: {size: 200, position: 'left', src: '07-min.jpg'},
        title: 'Schumann-Haus',
        text: 'Die frühere Wohnstätte des Schumann-Ehepaares umfasst eine Dauerausstellung, die über das Leben der beiden berühmten Musiker informiert. Der Komponist Robert Schumann (1810–1856) und die Pianistin Clara Wieck (1819–1896) bezogen nach ihrer Eheschließung im September 1840 das "Logis Erste Etage rechts" in diesem klassizistischen Haus. Eine Zeit großen Glücks und der fruchtbaren Zusammenarbeit begann und währte bis zum Umzug nach Dresden Ende 1844.'
      },
      {
        id: 8,
        card: {size: 350, position: 'center', top: 100},
        arrow: {type: 3, left: 20, top: 105},
        image: {size: 300, position: 'center', src: '08-min.jpeg'},
        title: 'Grafisches Viertel – Musikverlage (Notenwand)',
        text: 'Leipzig entwickelte sich im 19. Jahrhundert zu einer europäischen Musikmetropole ersten Ranges. Eine besondere Bedeutung spielte dabei das Verlagswesen, das vorrangig im Grafischen Viertel östlich des Leipziger Stadtzentrums angesiedelt war. Die älteste Institution und zugleich der älteste Musikverlag der Welt war der Verlag Breitkopf. Dieser wurde 1719 durch Bernhard Christoph Breitkopf gegründet.'
      },
      {
        id: 9,
        card: {size: 300, position: 'center', top: 100},
        arrow: {type: 5, left: -10, top: 95},
        image: {size: 182, position: 'left', src: '09-min.jpg'},
        title: 'Wagner-Denkmal',
        text: 'Die im Wagner-Jahr 1983 errichtete Richard-Wagner-Büste geht auf einen Entwurf des Leipziger Bildhauers Max Klinger zurück und besteht aus einem Sandsteinsockel mit Bronzeplastik, diese hergestellt 1982 in der Firma Noack.'
      },
      {
        id: 10,
        card: {size: 200, position: 'center', top: 100},
        arrow: {type: 2, left: 0, top: 100},
        image: {size: 150, position: 'center', src: '10-min.jpg'},
        title: 'Oper Leipzig',
        text: 'Die Oper Leipzig – bestehend aus Oper, Musikalische Komödie und Leipziger Ballett – ist die drittälteste bürgerliche Musiktheaterbühne Europas. Geprägt wird der herausragende internationale Ruf durch das Leipziger Gewandhausorchester, bedeutende Solisten, einen preisgekrönten Chor und das Leipziger Ballett.',
      },
      {
        id: 11,
        card: {size: 261, position: 'left', top: 100},
        arrow: {type: 6, left: 60, top: 105},
        image: {size: 200, position: 'center', src: '11-min.jpg'},
        title: 'Alte Nikolaischule',
        text: 'Als erste städtische Bürgerschule Leipzigs gehört die Alte Nikolaischule am Nikolaikirchhof zu den wertvollsten kulturellen Denkmälern der Stadt. Sie nahm im Jahr 1512 erstmals den Schulbetrieb auf. Große Persönlichkeiten wie Gottfried Wilhelm Leibniz, Johann Gottfried Seume oder Richard Wagner gingen hier zur Schule.',
      },
      {
        id: 12,
        card: {size: 300, position: 'left', top: 100},
        arrow: {type: 7, left: 90, top: 90},
        image: {size: 150, position: 'left', src: '12-min.jpg'},
        title: 'Nikolaikirche',
        text: 'Die spätgotische Nikolaikirche, deren Innenraum um 1790 klassizistisch umgestaltet wurde, ist eine der beiden erhaltenen Leipziger Kirchen, für deren Kirchenmusik Johann Sebastian Bach (1685–1750) verantwortlich war. Die Nikolaikirche ist die älteste und größte Kirche in Leipzig. Im Herbst 1989 war sie zentraler Ausgangspunkt der Friedlichen Revolution in der DDR.\n',
      },
      {
        id: 13,
        card: {size: 300, position: 'center', top: 110},
        arrow: {type: 1, left: 0, top: 70},
        image: {size: 220, position: 'left', src: '13-min.jpg'},
        title: 'Altes Rathaus',
        text: 'Das Alte Rathaus ist Leipzigs Wahrzeichen und zugleich auch das historische Gedächtnis der Stadt.\n' +
            'Im Alten Rathaus befinden sich wertvolle Exponate der Leipziger Musikgeschichte. In der Ratsstube unterschrieb Johann Sebastian Bach, die wohl berühmteste Person, die je ihren Fuß in das Leipziger Rathaus setzte, im Mai 1723 seinen städtischen Anstellungsvertrag als Thomaskantor und "director musices".\n',
      },
      {
        id: 14,
        card: {size: 261, position: 'right', top: 200},
        arrow: {type: 4, left: 25, top: 100},
        image: {size: 182, position: 'right', src: '14-min.jpg'},
        title: 'Museum der bildenden Künste – Beethoven',
        text: 'Im Museum der bildenden Künste ist eines der weltweit bedeutendsten musikbezogenen Werke der bildenden Kunst ausgestellt: Klingers Beethoven-Plastik.\n' +
            'Obwohl er nur ein Mal als aufstrebender junger Pianist und Komponist selbst in Leipzig weilte, hatte Beethoven enge Beziehungen zu Leipzig. Ein wichtiger Teil seiner Werke wurde in Leipzig verlegt, zunächst beim 1800 gegründeten "Bureau de Musique" (später C. F. Peters).\n',
      },
      {
        id: 15,
        card: {size: 261, position: 'left', top: 100},
        arrow: {type: 3, left: 65, top: 95},
        image: {size: 182, position: 'left', src: '15-min.jpg'},
        title: 'Zum Arabischen Coffe Baum',
        text: 'Seit 1711 wird in diesem Hause "Zum Arabischen Coffe Baum" Kaffee ausgeschenkt. Bis in die Gegenwart hinein beherbergt es Gaststätte und Kaffeeausschank (heute zugleich auch ein Kaffeemuseum).\n' +
            'Dabei erhielt das Café-Restaurant bereits seit dem Jahre 1694 prominenten Zuspruch, als sich Robert Schumann hier regelmäßig mit seinen Davidsbündlern zum Stammtisch traf.\n',
      },
      {
        id: 16,
        card: {size: 261, position: 'right', top: 100},
        arrow: {type: 2, left: 0, top: 100},
        image: {size: 250, position: 'left', src: '16-min-min.jpg'},
        title: 'Hôtel de Saxe',
        text: 'Das Haus war Quartier vieler berühmter Besucher Leipzigs. Beispielsweise nächtigte hier 1796 Wolfgang Amadeus Mozarts Witwe Constanze. Im Gepäck hatte sie die Partitur des Requiems ihres verstorbenen Mannes, so dass es im April 1796 zur Leipziger Erstaufführung des Werkes kommen konnte.',
      },
      {
        id: 17,
        card: {size: 261, position: 'left', top: 100},
        arrow: {type: 1, left: 15, top: 30},
        image: {size: 200, position: 'left', src: '17-min.jpg'},
        title: 'Thomaskirche',
        text: 'Die Thomaskirche ist der Ausgangspunkt der Musikstadt Leipzig. Hier wurde im Jahre 1212 das Augustiner Chorherrnstift gegründet und mit ihm der Thomanerchor. Sie war 27 Jahre lang die Wirkungsstätte von Johann Sebastian Bach, welcher von 1723 bis 1750 Thomaskantor in Leipzig war.\n',
      },
      {
        id: 18,
        card: {size: 350, position: 'center', top: 100},
        arrow: {type: 2, left: 20, top: 102},
        image: {size: 200, position: 'right', src: '18-min.jpeg'},
        title: 'Bach-Museum',
        text: 'Das Bach-Archiv mit dem dazugehörigen Bach-Museum finden Sie im Bosehaus. Das Gebäude gilt als eines der bedeutendsten Renaissancebauten Leipzigs. Gleichzeitig ist es eines der ältesten erhaltenen Gebäude an der Südseite des Thomaskirchhofs.\n' +
            'Viele seiner bedeutendsten Kompositionen sind in den 27 Jahren entstanden, die Bach in Leipzig lebte, u. a. die berühmte Johannes- und Matthäuspassion.\n',
      },
      {
        id: 19,
        card: {size: 261, position: 'left', top: 100},
        arrow: {type: 3, left: 50, top: 100},
        image: {size: 182, position: 'left', src: '19-min-min.jpeg'},
        title: 'Standort Geburtshaus von Clara Wieck',
        text: 'Clara Wiecks Vater, Friedrich Wieck, bewohnte von 1818 an als Klavierpädagoge, Instrumentenhändler und Inhaber einer musikalischen Leihbibliothek bis 1821 das Eckhaus zwischen Preußergäßchen (Nr. 48) und Neumarkt (Nr. 28), in dem Clara Wieck 1819 geboren wurde. Bis zur Zerstörung des Hauses "Hohe Lilie" am Ende des 2. Weltkrieges befand sich über der Wohnungstür zur ersten Etage eine Gedenktafel, die an die bedeutende Pianistin erinnerte.',
      },
      {
        id: 20,
        card: {size: 261, position: 'right', top: 105},
        arrow: {type: 2, left: 10, top: 100},
        image: {size: 160, position: 'left', src: '20-min-min.jpeg'},
        title: 'Standort Altes Konservatorium',
        text: 'Die erste höhere Bildungsanstalt für Musik im Gebiet des heutigen Deutschlands, das Leipziger Konservatorium der Musik, wurde am 2. April 1843 im Hof des alten Gewandhauses am Neumarkt eröffnet. Berühmtester Mitbegründer war der damalige Gewandhauskapellmeister Felix Mendelssohn Bartholdy (1809 - 1847).',
      },
      {
        id: 21,
        card: {size: 350, position: 'left', top: 105},
        arrow: {type: 5, left: 10, top: 100},
        image: {size: 300, position: 'right', src: '21-min-min.jpeg'},
        title: 'Standort Erstes Gewandhaus',
        text: 'Das erste Leipziger Gewandhaus wurde 1498 als zweiflügliges Gebäude an Gewandgäßchen und Universitätsstraße errichtet. Es wurde zunächst als Kaufhalle der Tuchmacher und zugleich als Zeughaus für stadteigene Waffen und Rüstungen genutzt. 1781 wurde der durch die Stadt Leipzig errichtete Konzertsaal eröffnet und das Orchester erhielt seinen Namen "Gewandhausorchester".',
      },
      {
        id: 22,
        card: {size: 250, position: 'right', top: 105},
        arrow: {type: 7, left: 35, top: 98},
        image: {size: 182, position: 'center', src: '22-min.jpg'},
        title: 'Paulinum – Aula und Universitätskirche St. Pauli',
        text: 'Während der fast 600-jährigen Universitätsgeschichte hatten besonders Studenten immer wieder großen Anteil am städtischen Musikleben. Sie wirkten in den Collegia musica von Telemann und Bach mit, spielten in Kaffeehäusern, in der Oper oder in Leipziger Kirchen und schlossen sich zu Chören zusammen. Beispielsweise die 1822 gegründete Universitätssängerschaft St. Pauli, die 1907/08 von Max Reger geleitet wurde.',
      },
      {
        id: 23,
        card: {size: 350, position: 'center', top: 150},
        image: {size: 350, position: 'center', src: '23.jpeg'},
        title: 'MDR Würfel – Orchester und Chöre des MDR',
        text: 'Der Dresdner Architekt Peter Kulka entwarf den schwarz glänzenden Kubus, der mit dem Gewandhaus verbunden und 2001 fertig gestellt wurde. Der Kubus am Augustusplatz wurde speziell für Proben und Tonaufnahmen des MDR Rundfunkchors und des MDR Sinfonieorchester gebaut.',
      },

    ]
  }
]

let place: any = computed(() => {
  return items.filter((item) => item.id === placeId)[0]
})
const share_text = place.value.info.share_text

const image_url = Url_base + '/images/' + place.value.info.image;
const page_url = Url_base + route.fullPath;

useHead(
    computed(() => {
      return {
        title: place.value.info.title,
        meta: [
          {
            property: 'description',
            content: place.value.info.share_text,
          },
          {
            property: 'og:title',
            content: place.value.info.title,
          },
          {
            property: 'og:description',
            content: place.value.info.share_text,
          },
          {
            property: 'og:image',
            content: image_url,
          },
          {
            property: 'og:image:width',
            content:256,
          },
          {
            property: 'og:image:height',
            content:256,
          },
          {
            property: 'og:url',
            content: page_url,
          },
          {
            property: 'og:type',
            content: 'article',
          },
          {
            name: 'twitter:card',
            content: 'summary',
          },
          {
            name: 'twitter:title',
            content: place.value.info.title,
          },
          {
            name: 'twitter:description',
            content: share_text,
          },
          {
            name: 'twitter:image',
            content: image_url,
          },
          {
            name: 'twitter:url',
            content: page_url,
          },

        ]
      }
    })
)
const itemGallery = ref({})
const show = ref(false)
const showGallery = ref(false)
const scrollY = ref(0)

function showShare() {
  alert(1)
  show.value = true
  stopScroll()
}

function closeDialogShare(){
  show.value=false
  startScroll()
}
function showGallary(item: object): void {
  itemGallery.value=item
  stopScroll()
  showGallery.value = true

}
function closeGallery(){
  startScroll()
  showGallery.value=false
}
function stopScroll(){
  scrollY.value = window.scrollY

  document.body.style.position = 'fixed';
}

function startScroll(){
  // document.body.style.position = 'relative';
  // window.scrollTo(0, scrollY.value);
}
function changeShareText(text: string): void {
  place.value.info.share_text = text
}

// const { share, isSupported } = useShare()

async function shared(text: string) {
  console.log(text)
  changeShareText(text)

  const blob = await fetch(Url_base + 'images/' + place.value.info.image).then(res => res.blob());

  const title = place.value.info.title.length < 65 ? place.value.info.title : place.value.info.title.slice(0, 60) + '...';
  const share_text = place.value.info.share_text.length < 155 ? place.value.info.share_text : place.value.info.share_text.slice(0, 150) + '...';

  await navigator.share({
    title: title,
    url: window.location.href,
    text: share_text,
    // files: [new File([blob], 'image.png', {
    //   type: blob.type,
    // }),]
  })}
</script>
