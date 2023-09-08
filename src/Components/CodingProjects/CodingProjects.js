import "./CodingProjects.css"
import { Dropdown } from './Dropdown.js'
import { Element } from './Element.js';


function CodingProjects(){
    return(
        <div className="CodingProjects"> 
            <header>
                Coding Projects 
            </header>
            <p>
                Here are the coding projects that I have created. There are projects from Highschool class, My personal passion projects, and some from my limited time so far at Cal Poly. 
            </p>
            <p>
                AP Computer Sciecne A (2021-2022)
            </p>
            <Dropdown name={"Overlake Monopoly (Final Project)"}>
                <Element link={"https://github.com/Alec-Odell/PostAPCSProject"}/>
            </Dropdown>
        </div>

    );
}

export default CodingProjects;