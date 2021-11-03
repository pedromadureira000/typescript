// ------------------------/Classes/---------------------
// Classes are just sugar to work with prototypes
interface UserInterface2 {
  getFullName(): string;
}
class User implements UserInterface2 {
  private firstName: string; //default is public
  protected lastName: string; // Protected means that we can use variables and functions inside children if we are doing inheritance.
  readonly unchangableName: string;
  static readonly maxAge = 50; // static properties are properties what we access from the class it self

  constructor(firstName: string, lastName: string) {
    this.lastName = lastName;
    this.firstName = firstName;
  }
  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

const someuser = new User("Monster", "Lessions");

class Admin extends User {
  private editor: string;
  setEditor(editor: string): void {
    this.editor = editor;
  }
  getEditor(): string {
    return this.editor;
  }
}

const admin = new Admin("foo", "bar");

// ------------------------/Ex/---------------------

class Empresa {
  public readonly nome: string; // public não necessário
  private readonly colaboradores: Colaborador[] = []; //will be checked when there is some value
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const empresa1 = new Empresa("Udemy", "11.111.111/0001-11");
const colaborador1 = new Colaborador("Luiz", "Otávio");
const colaborador2 = new Colaborador("Maria", "Miranda");
const colaborador3 = new Colaborador("João", "Vieira");
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
empresa1.mostrarColaboradores();
