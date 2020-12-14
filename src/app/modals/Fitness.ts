export class Fitness {
  private inr: number;
  private paisa: number;
  private streetaddress: string;
  private city: string;
  private state: string;
  private country: string;
  private pincode: number;
  private phonenumber: number;
  private email: string;
  private firstname: string;
  private lastname: string;
  private age: number;
  private trainerpreference: string;
  private physiotherapist: string;
  private packages: string;
  private id: string;

  constructor(
    $inr: number,
    $paisa: number,
    $streetaddress: string,
    $city: string,
    $state: string,
    $country: string,
    $pincode: number,
    $phonenumber: number,
    $email: string,
    $firstname: string,
    $lastname: string,
    $age: number,
    $trainerpreference: string,
    $physiotherapist: string,
    $packages: string,
    $id: string
  ) {
    this.inr = $inr;
    this.paisa = $paisa;
    this.streetaddress = $streetaddress;
    this.city = $city;
    this.state = $state;
    this.country = $country;
    this.pincode = $pincode;
    this.phonenumber = $phonenumber;
    this.email = $email;
    this.firstname = $firstname;
    this.lastname = $lastname;
    this.age = $age;
    this.trainerpreference = $trainerpreference;
    this.physiotherapist = $physiotherapist;
    this.packages = $packages;
    this.id = $id;
  }

  public toObject = () => {
    return {
      inr: this.inr,
      paisa: this.paisa,
      streetaddress: this.streetaddress,
      city: this.city,
      state: this.state,
      country: this.country,
      pincode: this.pincode,
      phonenumber: this.phonenumber,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      trainerpreference: this.trainerpreference,
      physiotherapist: this.physiotherapist,
      packages: this.packages,
    };
  };

  /**
   * Getter $inr
   * @return {number}
   */
  public get $inr(): number {
    return this.inr;
  }

  /**
   * Getter $paisa
   * @return {number}
   */
  public get $paisa(): number {
    return this.paisa;
  }

  /**
   * Getter $streetaddress
   * @return {string}
   */
  public get $streetaddress(): string {
    return this.streetaddress;
  }

  /**
   * Getter $city
   * @return {string}
   */
  public get $city(): string {
    return this.city;
  }

  /**
   * Getter $state
   * @return {string}
   */
  public get $state(): string {
    return this.state;
  }

  /**
   * Getter $country
   * @return {string}
   */
  public get $country(): string {
    return this.country;
  }

  /**
   * Getter $pincode
   * @return {number}
   */
  public get $pincode(): number {
    return this.pincode;
  }

  /**
   * Getter $phonenumber
   * @return {number}
   */
  public get $phonenumber(): number {
    return this.phonenumber;
  }

  /**
   * Getter $email
   * @return {string}
   */
  public get $email(): string {
    return this.email;
  }

  /**
   * Getter $firstname
   * @return {string}
   */
  public get $firstname(): string {
    return this.firstname;
  }

  /**
   * Getter $lastname
   * @return {string}
   */
  public get $lastname(): string {
    return this.lastname;
  }

  /**
   * Getter $age
   * @return {number}
   */
  public get $age(): number {
    return this.age;
  }

  /**
   * Getter $trainerpreference
   * @return {string}
   */
  public get $trainerpreference(): string {
    return this.trainerpreference;
  }

  /**
   * Getter $physiotherapist
   * @return {string}
   */
  public get $physiotherapist(): string {
    return this.physiotherapist;
  }

  /**
   * Getter $packages
   * @return {string}
   */
  public get $packages(): string {
    return this.packages;
  }

  /**
   * Getter $id
   * @return {string}
   */
  public get $id(): string {
    return this.id;
  }

  /**
   * Setter $inr
   * @param {number} value
   */
  public set $inr(value: number) {
    this.inr = value;
  }

  /**
   * Setter $paisa
   * @param {number} value
   */
  public set $paisa(value: number) {
    this.paisa = value;
  }

  /**
   * Setter $streetaddress
   * @param {string} value
   */
  public set $streetaddress(value: string) {
    this.streetaddress = value;
  }

  /**
   * Setter $city
   * @param {string} value
   */
  public set $city(value: string) {
    this.city = value;
  }

  /**
   * Setter $state
   * @param {string} value
   */
  public set $state(value: string) {
    this.state = value;
  }

  /**
   * Setter $country
   * @param {string} value
   */
  public set $country(value: string) {
    this.country = value;
  }

  /**
   * Setter $pincode
   * @param {number} value
   */
  public set $pincode(value: number) {
    this.pincode = value;
  }

  /**
   * Setter $phonenumber
   * @param {number} value
   */
  public set $phonenumber(value: number) {
    this.phonenumber = value;
  }

  /**
   * Setter $email
   * @param {string} value
   */
  public set $email(value: string) {
    this.email = value;
  }

  /**
   * Setter $firstname
   * @param {string} value
   */
  public set $firstname(value: string) {
    this.firstname = value;
  }

  /**
   * Setter $lastname
   * @param {string} value
   */
  public set $lastname(value: string) {
    this.lastname = value;
  }

  /**
   * Setter $age
   * @param {number} value
   */
  public set $age(value: number) {
    this.age = value;
  }

  /**
   * Setter $trainerpreference
   * @param {string} value
   */
  public set $trainerpreference(value: string) {
    this.trainerpreference = value;
  }

  /**
   * Setter $physiotherapist
   * @param {string} value
   */
  public set $physiotherapist(value: string) {
    this.physiotherapist = value;
  }

  /**
   * Setter $packages
   * @param {string} value
   */
  public set $packages(value: string) {
    this.packages = value;
  }

  /**
   * Setter $id
   * @param {string} value
   */
  public set $id(value: string) {
    this.id = value;
  }
}
