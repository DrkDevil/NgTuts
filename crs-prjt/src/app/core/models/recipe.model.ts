export class Recipe {
  // Model Blueprint
  public name: string;
  public description: string;
  public imagePath: string;
  // Pass them into the constructor
  constructor( name: string, desc: string, imagePath: string ) {
    // assign arguments (not available outside the model)
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
