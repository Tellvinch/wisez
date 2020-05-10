export class Quote {
  
  constructor(public id: number,public name: string,public author: string,public createdDate: Date,public submitter: string,){
  
  }
}

export class Vote {
  ok:number
}