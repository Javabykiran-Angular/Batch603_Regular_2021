
export class Department{

  private role:string;

  constructor(r:string){
    this.role=r;
  }

    getRole():string{
      return (this.role)
    }

    setRole(r:string):void{
      this.role=r;
    }




}