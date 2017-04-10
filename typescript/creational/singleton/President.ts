export class President {
  private static instance:President;

  private constructor(){}

  public static getInstance():President {
    return President.instance || (President.instance = new President());
  }
}
