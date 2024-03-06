import styles from "../styles/pages/Home.module.css";

//components
import Footer from "../components/footer";
import Navbar from "../components/navbar";

//clerk
import { UserButton, useUser, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  //user information
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className={styles.outer}>
      {/* background1 */}
      <div className={styles.background1}>
        <Navbar />
        <div className={styles.main}>
          <div className={styles.mainImage}></div>
          <div>
            <SignedIn>
              <div style={{ fontSize: "50px", textAlign: "center", lineHeight: "1.3" }}>
                Start the year off strong <br /> with some strong cocaine <br /> {user?.username}
              </div>
            </SignedIn>

            <SignedOut>
              <div style={{ fontSize: "50px", textAlign: "center", lineHeight: "1.3" }}>
                Start the year off strong <br /> with some strong cocaine
              </div>
            </SignedOut>
            <div className={styles.shopCont}>
              <div className={styles.shop}>SHOP DRUGS</div>
              <div className={styles.shop}>SHOP KILOS</div>
            </div>
          </div>
        </div>
      </div>

      {/* background2 */}
      <div className={styles.background2}>
        <div style={{ fontSize: "35px" }}>Find your flavor</div>
        <div className={styles.allFlavorCont}>
          <div className={styles.singleFlavorCont}>
            <div className={styles.flavorImg}>
              <img src="https://i.pinimg.com/236x/75/c6/ec/75c6ec1314e73f0ab16d9f3a7ff8e345.jpg" />
            </div>
            <div className={styles.flavorName}>Cookie</div>
          </div>
          <div className={styles.singleFlavorCont}>
            <div className={styles.flavorImg}>
              <img src="https://i.pinimg.com/236x/ec/53/da/ec53da0cfb23ed8f8f8cfbf016819320.jpg" />
            </div>
            <div className={styles.flavorName}>Doughnut</div>
          </div>
          <div className={styles.singleFlavorCont}>
            <div className={styles.flavorImg}>
              <img src="https://i.pinimg.com/564x/7b/ca/5d/7bca5dd4bfdf8b3c3333cad45a2add39.jpg" />
            </div>
            <div className={styles.flavorName}>Watermelon</div>
          </div>
          <div className={styles.singleFlavorCont}>
            <div className={styles.flavorImg}>
              <img src="https://i.pinimg.com/564x/4b/53/39/4b53391b0c529da28e68734b87ed954e.jpg" />
            </div>
            <div className={styles.flavorName}>Icecream</div>
          </div>
          <div className={styles.singleFlavorCont}>
            <div className={styles.flavorImg}>
              <img src="https://i.pinimg.com/564x/1c/fd/7d/1cfd7d9ce03a08735df4ade098b7b60c.jpg" />
            </div>
            <div className={styles.flavorName}>Cake</div>
          </div>
          <div className={styles.singleFlavorCont}>
            <div className={styles.flavorImg}>
              <img src="https://i.pinimg.com/564x/32/65/de/3265de80c13525b981724033cc5f8685.jpg" />
            </div>
            <div className={styles.flavorName}>Cone Icecream</div>
          </div>
          <div className={styles.singleFlavorCont}>
            <div className={styles.flavorImg}>
              <img src="https://i.pinimg.com/236x/44/08/7e/44087e8d7176beea189d0718d66c16e0.jpg" />
            </div>
            <div className={styles.flavorName}>Soda</div>
          </div>
          <div className={styles.singleFlavorCont}>
            <div className={styles.flavorImg}>
              <img src="https://i.pinimg.com/236x/66/22/5e/66225e1a29057f11a74512b02fa13d8c.jpg" />
            </div>
            <div className={styles.flavorName}>Cupcake</div>
          </div>
        </div>
      </div>

      {/* background3 */}
      <div className={styles.background3}>
        <div className={styles.leftCont3}>
          <div className={styles.header3}>Nice, Crispy Crack 😩</div>
          <div className={styles.body3}>
            Put more powder in your nose with our brand-new invention: <br />
            Magic Spoon drugs! feels just like the ooey-gooey-chewy <br />
            powder you loved as a kid-but now made with grown up <br />
            ingredients. Take a Treat for wharever life takes you. Available in <br />
            all sorts of flavors
          </div>
          <div>
            <img className={styles.body3Img} src="https://i.pinimg.com/564x/df/82/a9/df82a9b0cfb5f9f09cdfb98e3819b417.jpg" />
          </div>
        </div>
        <div>
          <img className={styles.img3} src="https://i.pinimg.com/564x/ce/d5/60/ced560272f13d1d7b480f4daaf3ad499.jpg" />
        </div>
      </div>

      {/* background4 */}
      <div className={styles.background4}>
        <div className={styles.background4Box}>
          "There's a new magician in <br />
          the kitchen."
          <hr className={styles.line} />
        </div>

        <div className={styles.background4Box}>
          "With drugs that feel <br />
          this good and offers so <br />
          much ... Magin Spoon may <br />
          be the future of everything."
          <hr className={styles.line} />
        </div>
        <div className={styles.background4Box}>
          "Magic Spoon has become <br />
          my go-to for one <br />
          simple reason: it <br />
          gives the best high."
          <hr className={styles.line} />
        </div>
      </div>

      {/* background5 */}
      <div className={styles.background5}>
        <img className={styles.body5img1} src="https://i.pinimg.com/564x/58/63/e1/5863e1721154172cfbb40cda3f644e6f.jpg" />
        <div className={styles.body5cont}>
          <div style={{ fontSize: "70px", width: "500px", lineHeight: "1.2" }}>A whole world of drugs.</div>
          <div className={styles.body5btn}>Try Now</div>
        </div>
        <img className={styles.body5img1} src="https://i.pinimg.com/564x/6a/9b/62/6a9b62cf4893010fd150fc2391bfc0b9.jpg" />
      </div>

      {/* background6 */}
      <div className={styles.background6}>
        {/* top part of body */}

        <div className={styles.body6top}>
          {/* card1 */}
          <div className={styles.body6card}>
            <div className={styles.cardBody}>
              "I just snorted delicious crack for <br />
              dinner and the last time I did that <br />
              was my sophomore year in <br /> college!"
            </div>
            <div className={styles.cardbottom}>
              <div className={styles.cardName}>KELLY LEVEQUE</div>
              <div className={styles.cardBio}>
                Professional hobo, Wellness Expert, and Celebrity Health
                <br />
                Coach
              </div>
            </div>
            <div className={styles.cardPfp}>
              <img src="https://i.pinimg.com/564x/9b/b0/66/9bb066864b0d225c324551ee2c83125d.jpg" />
            </div>
          </div>
          {/* card2 */}
          <div className={styles.body6card}>
            <div className={styles.cardBody}>
              "When they said ‘Breakfast of <br />
              drug addicts’, they meant Magic <br />
              Spoon."
            </div>
            <div className={styles.cardbottom}>
              <div className={styles.cardName}>
                PRISCILLA FREDERICK- <br />
                LOOMIS
              </div>
              <div className={styles.cardBio}>
                Olympian, Entrepreneur, Radio Personality, drug tester & <br />
                Public Speaker
              </div>
            </div>
            <div className={styles.cardPfp}>
              <img src="https://i.pinimg.com/236x/57/b1/64/57b164da9d70a79c3a60a11e9ba9095b.jpg" />
            </div>
          </div>
          {/* card3 */}
          <div className={styles.body6card}>
            <div className={styles.cardBody}>
              "Magic Spoon is my adult life and <br />
              kid life smashed into one fantastic <br />
              kilo of weed.
            </div>
            <div className={styles.cardbottom}>
              <div className={styles.cardName}>NATALIE DURAN</div>
              <div className={styles.cardBio}>Rock Climber, Ninja Warrior, Professional Gooner, Producer</div>
            </div>
            <div className={styles.cardPfp}>
              <img src="https://i.pinimg.com/474x/75/c7/c5/75c7c5ee704b035cc74cdb2c7c9bdfba.jpg" />
            </div>
          </div>
        </div>

        {/* bottom part of body */}
        <div className={styles.body6bottom}>
          <div style={{ fontSize: "70px", width: "600px", lineHeight: "1" }}>
            Why did we grow up,
            <a className={styles.outline}>but our cereal didn't?</a>
          </div>
          <div className={styles.body6btn}>Our Story</div>
        </div>
      </div>

      {/* footer or background7 */}
      <Footer />
    </div>
  );
}
