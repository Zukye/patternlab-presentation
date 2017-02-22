// Import React
import React from "react";

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    Image,
    Appear,
    S,
    ComponentPlayground,
    CodePane
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("../src/custom.scss");
require("spectacle/lib/themes/default/index.css");


const images = {
    atomicDesign: require("../assets/img/atomic-design-process.png"),
    atoms: require("../assets/img/atomic-design-atoms.png"),
    atomIcon: require("../assets/img/atom-icon2.png"),
    atomInput: require("../assets/img/atom-input.png"),
    atomLabel: require("../assets/img/atom-label2.png"),
    atomButton: require("../assets/img/atoms-button2.png"),
    molecules: require("../assets/img/molecules.png"),
    moleculeSearch: require("../assets/img/molecule-search.png"),
    moleculeTeaser: require("../assets/img/molecule-teaser.png"),
    organisms: require("../assets/img/organisms.png"),
    organismHeader: require("../assets/img/organisms-header.png"),
    organismTeaser: require("../assets/img/organism-teaser.png"),
    templates: require("../assets/img/templates.png"),
    template: require("../assets/img/template.png"),
    templateConti: require("../assets/img/template-conti.png"),
    pages: require("../assets/img/pages.png"),
    pagesConti: require("../assets/img/page-conti.png"),
    whatMeme: require("../assets/img/what-meme.jpg"),
    magicMeme: require("../assets/img/magic-meme.png"),
    formExample: require("../assets/img/form-example.png"),
    arrow: require("../assets/img/arrow.png"),
    dropdown: require("../assets/img/dropdown.png"),
    pseudoPatternNav: require("../assets/img/pseudopattern-nav.png"),
    doku: require("../assets/img/dokumentation.png"),
    annotations: require("../assets/img/annotations.png"),
    annotatedNav: require("../assets/img/annotated-nav.png"),
    gif: require("../assets/img/dance.gif")
};

preloader(images);


const theme = createTheme({
    primary: "white",
    secondary: "#BE6700",
    tertiary: "#03A9FC",
    quartenary: "#DAAE61",
    quinary: "black",
    senary: "#f6f5df",
    septenary: "#F2F0D8",
    gray: "#E0E0E0",
    white: "#ffffff"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
});

var styles = {
    container: {
        border: '2px solid #D97F38',
        margin: '40px 0 0 0',
        display: 'inline-block',
        padding: '0 15px 0 15px',
    }
}


export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["zoom"]} transitionDuration={500} theme={theme}>
                <Slide transition={["zoom"]} bgColor="senary">
                    <Heading size={3} fit caps lineHeight={1} textColor="quinary">Patternlab</Heading>
                    <Text margin="10px 0 0" textColor="quartenary" size={5} fit bold>...und eine kleine
                        Chemie-Exkursion</Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="septenary">
                    <Heading size={6} textColor="quartenary" caps>Atomic Design</Heading>
                    <Image margin="40px 0 0" src={images.atomicDesign} width="100%"/>
                </Slide>
                <Slide bgColor="septenary" transition="spin">
                    <Heading size={1} textColor="quartenary" caps fill>Atoms</Heading>
                    <Image margin="40px 0 0" src={images.atoms} width="100%"/>
                </Slide>

                <Slide transition="fade" bgColor="secondary" textColor="white">
                    <Text size={2} textColor="white" bold margin="20px 0 0 0">Kleinste Bausteine des UI</Text>
                    <Image className="" src={images.atomIcon} margin="80px 0 0" fill/><br/>
                    <Image className="" src={images.atomInput} fill/><br/>
                    <Image className="" src={images.atomLabel} fit/><br/>
                    <Image className="" src={images.atomButton} fit/>
                </Slide>

                <Slide bgColor="septenary" transition="spin">
                    <Heading size={1} textColor="quartenary" caps fill>Molecules</Heading>
                    <Image margin="40px 0 0" src={images.molecules} width="100%"/>
                </Slide>

                <Slide transition={["fade"]} bgColor="secondary" textColor="white">
                    <Text size={6} textColor="white" bold fill>Einfache Gruppierungen von Elementen
                        als funktionierende
                        Einheit</Text>
                    <div className="left">
                        <Image margin="80px 0 0 0" src={images.moleculeSearch} fit/>
                        <Image margin="27px 0 0 116px" className="left" src={images.moleculeTeaser} fit/>
                    </div>

                    <List margin="293px 0 0 0" fit>
                        <ListItem textSize="39px">Input + Button + Label</ListItem>
                        <ListItem textSize="39px">Bild + Label + Icon</ListItem>
                        <ListItem textSize="39px">...</ListItem>
                    </List>
                </Slide>

                <Slide bgColor="septenary" transition="spin">
                    <Heading size={1} textColor="quartenary" caps fill>Organisms</Heading>
                    <Image margin="40px 0 0" src={images.organisms} width="100%"/>
                </Slide>

                <Slide transition={["fade"]} bgColor="secondary" textColor="white">
                    <Text size={6} textColor="white" fill bold>Komplexe Elemente aus mehreren
                        Molekülen, Atomen, Organismen</Text>
                    <Image margin="80px 0 0 0" src={images.organismHeader} width="80%"/><br/>
                    <Image margin="40px 0 0 0" src={images.organismTeaser} width="80%"/>
                    <List >
                        <ListItem className="center" textSize="39px">Header, Footer, Forms...</ListItem>
                    </List>
                </Slide>

                <Slide bgColor="septenary" transition="spin">
                    <Heading size={1} textColor="quartenary" caps fill>Templates</Heading>
                    <Image margin="40px 0 0" src={images.templates} width="100%"/>
                </Slide>

                <Slide transition={["fade"]} bgColor="secondary" textColor="white">
                    <Text size={6} textColor="white" bold>Struktur und Aufbau</Text>
                    <List className="left" margin="100px 0 0 0" fit>
                        <ListItem margin="30px 0 0 0" textSize="39px">Kein repräsentativer Inhalt!</ListItem>
                        <ListItem margin="30px 0 0 0" textSize="39px">Nur das Skelett der Seite</ListItem>
                    </List>
                    <Image className="right" margin="30px 0 0 0" src={images.templateConti} width="100%" fill/><br/>
                </Slide>

                <Slide bgColor="septenary" transition="spin">
                    <Heading size={1} textColor="quartenary" caps fill>Pages</Heading>
                    <Image margin="40px 0 0" src={images.pages} width="100%"/>
                </Slide>

                <Slide transition={["fade"]} bgColor="secondary" textColor="white">
                    <Text size={5} textColor="white" bold>Spezifische
                        Instanzen von Templates</Text>
                    <List className="left" margin="30px 0 0 0" fit>
                        <ListItem margin="30px 0 0 0" textSize="39px">Repräsentativer und realistischer
                            Inhalt</ListItem>
                        <ListItem margin="30px 0 0 0" textSize="39px">Leicht auch Randfälle/Userrollen
                            darstellen</ListItem>
                        <ListItem margin="30px 0 0 0" textSize="39px">Passen Skelett und Inhalt zusammen?</ListItem>
                    </List>
                    <Image margin="30px 0 0 0" className="right" src={images.pagesConti} width="100%" fill/><br/>
                </Slide>

                <Slide transition={["spin"]} bgColor="septenary">
                    <Heading size={1} caps bold fill textColor="quartenary">Next:</Heading>
                    <Heading size={1} caps bold fill textColor="#000000">Patternlab!</Heading>
                    <Appear fid="1">
                        <Image margin="10px 0 20px 0" src={images.whatMeme} width="60%"/>
                    </Appear>
                </Slide>

                <Slide transition={["spin"]} bgColor="septenary">
                    <Heading size={1} caps bold fill textColor="quartenary" margin="0 0 80px 0">Patternlab...</Heading>
                    <List>
                        <ListItem>verwandelt source code in einen statischen Styleguide</ListItem>
                        <ListItem margin="10px 0 0 0">zeigt Dokumentation und Annotationen an</ListItem>
                        <ListItem margin="10px 0 0 0">ist <S type="bold">kein</S> UI framework wie Bootstrap</ListItem>
                    </List>

                    <Appear>
                        <div>
                            <Image src={images.magicMeme} className="magic-meme"/>
                        </div>
                    </Appear>
                </Slide>

                <Slide transition={"fade"} bgColor="septenary">
                    <Heading caps bold fit textColor="quartenary">Mustache Templates</Heading>
                    <Text>erstellen und importieren</Text>
                    <CodePane lang="html"
                              source={require("raw-loader!../assets/atom.example")} margin="80px 0 0 0"/>
                    <CodePane lang="html"
                              source={require("raw-loader!../assets/molecule.example")} margin="20px 0"/>
                </Slide>

                <Slide transition={"slide"} bgColor="septenary">
                    <Heading textColor="quartenary">Datenpflege</Heading>
                    <CodePane lang="json"
                              source={require("raw-loader!../assets/json.example")} margin="80px 0 0 0"/>
                    <CodePane lang="html"
                              source={require("raw-loader!../assets/atom2.example")} margin="20px 0 0 0"/>
                    <Appear fid="1">
                        <Image src={images.arrow} fit/>
                    </Appear>
                    <Appear fid="1">
                        <Image src={images.dropdown} fit/>
                    </Appear>
                </Slide>

                <Slide transition={"fade"} bgColor="septenary">
                    <Heading caps bold fit textColor="quartenary">Pseudo-Patterns</Heading>
                    <Heading size={5}>Default Content überschreiben</Heading>
                    <CodePane margin="80px 0 0 0">patternName~pseudo-pattern-name.json</CodePane>
                    <Text size={5} textColor="secondary" fit margin="20px 0 0 0">Überschreibt Default Content von
                        "patternName"</Text>
                    <CodePane lang="json" className="left" source={require("raw-loader!../assets/pattern.example")}
                              margin="20px 0"/>
                    <CodePane lang="json" className="right"
                              source={require("raw-loader!../assets/pseudopattern.example")} margin="20px 0"/>
                    <Appear fid="1">
                        <Image src={images.arrow} className="right" width="20%"/>
                    </Appear>
                    <Appear fid="1">
                        <Image src={images.pseudoPatternNav} className="right"/>
                    </Appear>
                </Slide>

                <Slide transition={"fade"} bgColor="septenary">
                    <Heading caps bold fit textColor="quartenary">Dokumentation</Heading>
                    <Image src={images.doku} margin="20px 0 0 0" width="70%"/>
                    <List>
                        <ListItem className="center" textSize="30px">Dokumentation</ListItem>
                        <ListItem className="center" textSize="30px">Verwendete Patterns</ListItem>
                        <ListItem className="center" textSize="30px">Annotationen</ListItem>
                        <ListItem className="center" textSize="30px">HTML, css...</ListItem>
                    </List>
                </Slide>

                <Slide transition={"fade"} bgColor="septenary">
                    <Heading caps bold fit margin="0 0 80px 0" textColor="quartenary">Annotations</Heading>
                    <Image src={images.arrow} className="mirror" fill/>
                    <CodePane lang="js" className="left" margin="100px 0 0 0"
                              source={require("raw-loader!../assets/annotations.example")}/>
                    <Image src={images.annotations} className="right" margin="100px 0 0 0"/>
                    <Image src={images.annotatedNav} margin="30px 0 0 0" width="100%"/>
                </Slide>

                <Slide bgImage={images.gif}>
                    <Heading textColor="deeppink">Live Demo</Heading>
                </Slide>
            </Deck>
        );
    }
}
