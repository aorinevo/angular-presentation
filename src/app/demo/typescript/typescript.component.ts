import {Component} from '@angular/core';
import {pureJavascript, typeScriptWithConsoleLog} from '../../exercise/helpers/helpers';
import {ng2tsConfig} from '../../../../ng2ts/ng2ts';


@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})

export class TypescriptComponent {
  title = 'TypeScript';
  description = '';
  prereqs = '';

  code = {
    moreTypes: {
      code: `var number: number = 1;
var string: string = 'pikachu';
// Array of things
var names: Array<string> = ['Camille', 'Edgar'];
// Same as above
var names: string[] = ['Camille', 'Edgar'];

// TODO: more types
      `
    },
    varDeclaration: {
      code: `// Var is still allowed but not recommended.
var v = 1;         

// Let should be used instead of var.
let l = 1;

if(true){
  let ll = 1; // Unlike var let is unavailable outside of this if.
}
console.log(ll); // undefined       


// Const is like let, but if you try to change it, TS will give you an error.
const x = 1;
x = 2;`

    },
    stringType: {
      code: `let fullName: string = 'Bob Bobbington';
let sentence: string = \`Hello, my name is \${ fullName }.\`;`
    },
    stringType2: {
      code: `let sentence: string = "Hello, my name is " + fullName + "."`
    },
    anyType: {
      code: `let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean`
    },
    classDescription: {
      code: typeScriptWithConsoleLog(`// We define the class 
export class Puppy {
  bark(){
    // That's how russian dogs talk.
    return 'Gav gav!!';
  }
}

// Now we can instantiate (create) it 
var hotdog = new Puppy();
// And use it's methods
console.log(hotdog.bark());
`),
      codeConstructor: typeScriptWithConsoleLog(`export class Puppy {
  constructor(public name: string){}
  bark(){
    return 'Gav! my name is ' + this.name;
  }
}

var hotdog = new Puppy('Édouard');
console.log(hotdog.bark());
// Let's create more puppies
var oscar = new Puppy('Oscar-Claude');
console.log(oscar.bark());

`), codeExport: typeScriptWithConsoleLog(`export class Puppy {
  constructor(public name: string){}
  bark(){
    return 'Gav! my name is ' + this.name;
  }
}`), codeImport: typeScriptWithConsoleLog(`import {Puppy} from './puppy'

var hotdog = new Puppy('Édouard');
console.log(hotdog.bark());
// Let's create more puppies
var oscar = new Puppy('Oscar-Claude');
console.log(oscar.bark());
`, 'import "app.ts";', undefined, `export class Puppy {
  constructor(public name: string){}
  bark(){
    return 'Gav! my name is ' + this.name;
  }
}`),
      matches: {
        classMatch: /class/,
        exportMatch: /export/,
        importMatch: /import/,
        constants: /const /,
        constructorMatch: /constructor/,
        edouardMatch: /Édouard/,
        oscarMatch: /Oscar-Claude/,
      }
    },
    tsExercise: pureJavascript(
      `function add(a: number, b: number){
  return a+b
};

display(add('2', 2));`, `
    import {value} from 'app.ts';
    document.write('<h1>' + value.value + '</h1>');`,
      `
    import {value} from 'app.ts';
    
    describe('value', ()=>{
      it('equals 5', ()=>{
        chai.expect(value.value).equals(4);
      })
    })
    `),
    tsExerciseMatch: /'.*'/
  };
  exercises = [
    ng2tsConfig.milestones[0].exercises[1]
  ];
}

