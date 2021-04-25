

Food & Fiction
La tasca és construir un espai web relacionat amb la gastronomia. Food & Fiction es un web fictici que rememora alguns conceptes o elements gastronòmics reals només en algunes ficcions (televisives). D'aquesta manera, podem trobar l'hamburguesa de cranc típica de Bob Esponja o el pestís de cireres tan llorejat per un dels personatges a la sèrie de televisió Twin Peaks. Cal mencionar que la part "Fiction" de Food & Fiction no es estricte, perqué alguns elements són certament representacions del món real, com el cas de l'establiment Big Boy's o The cheesecake Factory. De vegades ficció i realitat es retro representen.

Prenent aquesta premisa, he decidit incloure-hi elements televisius adicionals. Així, a part d'afegir-hi imatges, hi incorporat videos/audios relacionats amb les series de televisió, he utilitzat una llibreria per emular un scroll cap amunt automàtic amb só reminiscent a la música d'assensors al cliclar un text "grandilocuent" que emula la película The Grand Hotel Budapest i he aplicat un efecta al botó de LOST? (una altre referència a una sèria de televisió) que emula als credits d'entrada d'aquesta mateixa sèrie. 

Hi ha elements que a propòsit no es destaquen, com els videos fora de la pantalla, o l'ascensor al final de la pàgina del menú, l'enllaç del nom de Quentin Tarantino, el segon botó de lost, etc. per permetre el descobriment dels mateixos. Però no aplico un estil molt marcat a l'enllaç del nom de l'autor, tret del hover, intencionalment. Finalment, els ingredients del pestís de cireres, evidentment, no se sap on són i la imatge del tarró de galetes de xocolata finalment no s'han produït.

POSICIONAMENT
Utilitzo els vh per aconseguir colocar els iframes per sota dels 100vh, de manera que l'usuari trobi els continguts visuals just al utilitzar l'scroll. Així, puc mantenir la serenor i mantenir, a primer cop d'ull, només breus "copies", textos senzills i escuets mantenint amplis espais buits. Utilitzar marges o altres estrategies seria massa enrebuscat.

VARIS
Al navegar per la pàgina, el item seleccionat desapareix. Només en el cas de LOST? es manté, simulant un error. Però aquest es clicable i et porta a una segona y última pàgina. En aquestes pàgines no hi ha explicació de què és aquest lloc (tampoc n'hi havia a la sèrie lost) i a més hi ha l'obligació de fer una pàgina de presentació.

A la llista de links cito els links de fotografies i fonts que he emprat per a la confecció de lloc. En el cas d'enllaços o videos, al tractarse de, precisament, ja links cap aquests recursos seria redundant.

Respecta la política de tall de les paraules, en general es break-all. Sobre tot ho prefereixo quan la página es consumeix en mobil, perque sinó la alternativa es disminuir el temany de pantalla (seria una opció). Per tant, només en l'interval de 780 a 500 pixels la propietat word-break té el valor normal, de manera que no es tallen i el salant d'una paraula a la següent línia succeïx quan ja no queda espall per ella. Però al ser tant restringit la condició, només es dona, pràcticament, quan es manipular la pàgina en una pantalla d'ordinador (o tauleta). Personalment, m'agrada l'opció de break-all per a temanys estrets, provocant formes gaire bé cubistes. 

NPM PACKAGE ELEVATOR.JS
He descarregat com a dependència addicional Elevator.js. Es tracta d'una petita dependència que afegeix una funcionalitat alternativa al scroll del ratolí, quan aquest és per a pujar de nou.

Es pot veure que a la carpeta generada per parcel, el meu codi, si bé petit, pròpi de les últimes especificaions (arrow function i ús de const) es modificat, transpilat a la línia 129 amb versió antiga de JavaScript, i empra la nomenclatura 'function' o el keyword var, en comptes de const.

DETALL
La pàgina de detall està enllaçada a través del títol de la fitxa de producte de la página "menu" del producte "cheese burger".


DOCUMENTACIÓ PEC2
Incorporo el footer amb dos llistes de logotips (social media y mètodes de pagament). Seguint la línia del header, que el mantinc, el faig en "position" "fixed" així és visible en qualsevol altura de la pàgina. Mantinc les dos llistes enganxades a cada costat. No gestiono la colocació un damunt de l'altre per a mides estretes, perque no col·lisionen fins a mides molt estretes i els dispositiu d'avui dia ja tenen mides suficients.