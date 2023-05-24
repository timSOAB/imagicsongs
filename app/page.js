import Image from 'next/image'
import styles from './page.module.css'
import { Arizonia, Satisfy} from 'next/font/google'
import Script from "next/script";

const myTitleFont = Arizonia({
  weight: '400',
  subsets: ['latin'],
});
const myFont = Satisfy({
  weight: '400',
  subsets: ['latin'],
});

async function getData() {
    const res = await fetch(process.env.ROOT_PATH + "/api/songs", { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }   
    return res.json();
  }
   

export default async function Home() {
    const songData = await getData();
    var loopCounterSong =0
    var loopCounterList = 0;
    var myAudioArr = [];
    var myArrCount = 0;
    var myListArray = 0;
    var myListSongDivArr = 0;
    var myListClassicDivArr = 0;

    return (
    <main className={`${styles.main}, ${myFont.className}`}>
      <div className={styles.topOuterDiv}  id={styles.snapToThis}>
        <div className={styles.backgroundImageHolder}>
          {/* <Image src="/images/bg.png" width={1920} height={1080} alt={"background"}></Image> */}
        </div>
        <div className={styles.leftTitle}>
          <div className={styles.titleHolder}>
          <h1 className={myTitleFont.className}>Richard Marley</h1>
          <p>sings JAZZ, BLUES & CLASSIC SONGS</p>
          </div>
        </div>
        <div className={styles.rightImg}>
          <Image src="/images/singer-mainNEW.png" height={680} width={521} alt="Richard Marley" id={"myArtistImage"}></Image>
        </div>
      </div>
      <div className={styles.listDiv} id="myListDiv">
        <div className={styles.bigAvatar}>
        <Image src={"/images/cover.png"} alt={"cover"} height={200} width={200}></Image>
        </div>
        <div className={styles.innerList}>
            <div className={styles.songList}>
                <div className={styles.songListHolder}>
                    {songData && songData.map(mpdData => {                        
                        return <div className={`${styles.songListDiv} ${"mySongDiv"+myListSongDivArr++}`} id="myListButtons">
                            <div className={styles.listPlayBtn}  indexvalue={myListArray++}>
                                <Image src={"/images/play.png"} alt={"play Button"} width={30} height={30}></Image>
                            </div>
                            <div className={styles.listSongName}>
                                <p>{mpdData.songName}</p>
                            </div>
                        </div>               
                    })}
                </div>
            </div>
        </div>
      </div>
      <div className={styles.audioPlayerOter} id="audioPlayerOter">
        <div className={styles.audioPlayerInner}>
            <div className={styles.avatarOrCover}>
                <Image src={"/images/cover.png"} alt={"cover"} height={50} width={50}></Image>
            </div>
            <div className={styles.divSongD}>
                <div className={styles.titleAndCredHolder}>
                    <h3 id="myAudioTitle">Autumn Leaves</h3>
                    <p>By Richard Marley</p>
                </div>
            </div>
            <div className={styles.divPlayBtns}>
                <div className={styles.btnsWraper}>
                    <div className={styles.preBtn} id="preBtn">
                        <Image src={"/images/playB.png"} alt={"preBtn"} height={30} width={30}></Image>
                    </div>
                    <div className={styles.playBtn} id="audioPlayerPlayButton">
                        <Image src={"/images/playB.png"} alt={"playBtn"} height={30} width={30} unoptimized ></Image>
                    </div>
                    <div className={styles.nxtBtn} id="nextBtn">
                        <Image src={"/images/playB.png"} alt={"nxtBtn"} height={30} width={30}></Image>
                    </div>
                </div>
            </div>
            <div className={styles.divSeekBar}>
                <input type="range" defaultValue={0} id="myAudioSeekBar"/>
            </div>
            <div className={styles.divExtraBtns}>
                <div className={styles.extraBtnWrp}>
                    <div className={styles.repeatBtn} id="myRepeatBtn" mybtnmode="false">
                        <Image src={"/images/repeatB.png"} alt={"repeat"} height={30} width={30} unoptimized ></Image>
                    </div>
                    <div className={styles.repeatList} id="myListBtn" isvisible="false">
                        <Image src={"/images/listB.png"} alt={"list"} height={30} width={30} unoptimized ></Image>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className={styles.songsListed} id={styles.snapToThis}>
        <div className={styles.listHolder}>
            <div className={styles.classicalHitsTitle}>
                <h2>Classic Songs</h2>
            </div>
            <div className={styles.songsList}>
                {songData && songData.map(mpdData => {
                    loopCounterSong++;
                    myAudioArr.push([mpdData.songName,mpdData.songPath]);                    
                    if(mpdData.songType === "Classic" || mpdData.songType === "classic"){
                        if( loopCounterSong == 1){
                            return <>                                
                                <audio indexnumber="0" controlsList="nodownload" className={styles.myAudioTag} src={myAudioArr[0][1]} id="myAudioTag"></audio>
                                <div className={`${styles.songListDiv} ${"mySongDiv"+myListClassicDivArr++}`} id="classicButtons">
                                    <div className={styles.listPlayBtn} indexvalue={myArrCount++}>
                                        <Image src={"/images/playB.png"} alt={"play Button"} width={30} height={30} unoptimized></Image>
                                    </div>
                                    <div className={styles.listSongName}>
                                        <p>{mpdData.songName}</p>
                                    </div>
                                </div> 
                            </>
                        }else{
                        return <div className={`${styles.songListDiv} ${"mySongDiv"+myListClassicDivArr++}`} id="classicButtons">
                                <div className={styles.listPlayBtn} indexvalue={myArrCount++}>
                                    <Image src={"/images/playB.png"} alt={"play Button"} width={30} height={30}></Image>
                                </div>
                                <div className={styles.listSongName}>
                                    <p>{mpdData.songName}</p>
                                </div>
                            </div>
                        }
                    }                        
                })}
            </div>
              <div className={styles.classicalHitsTitle}>
                  <h2>Own Songs</h2>
              </div>
              <div className={styles.songsList}>                  
                {songData && songData.map(mpdData => {
                    if(mpdData.songType === "Own" || mpdData.songType === "own"){
                        return <div className={`${styles.songListDiv} ${"mySongDiv"+myListClassicDivArr++}`} id="myOwnSongsButtons">
                            <div className={styles.listPlayBtn} indexvalue={myArrCount++}>
                                <Image src={"/images/playB.png"} alt={"play Button"} width={30} height={30}></Image>
                            </div>
                            <div className={styles.listSongName}>
                                <p>{mpdData.songName}</p>
                            </div>
                        </div>
                    }                        
                })}
              </div>
          </div>
      </div>

        <div className={styles.myFooter} id={styles.snapToThis}>
            <div className={styles.innerFooter}>
                <div className={styles.leftFooter}>
                    <div className={styles.ledtInnerFooter}>
                        <Image src={"/images/mrRichard.jpg"} height={300} width={300} alt={"contatct Richard"}></Image>
                        <a href="#"><p>Online English class in Vietnam Video</p></a>
                    </div>
                </div>
                <div className={styles.centerFooter}>
                    <h3>Contact Me</h3>
                    <h4>(+44) 07724045608</h4>
                    <a href="mailto:richard@imagicsongs.com">
                        <h4>richard@imagicsongs.com</h4>    
                    </a>

                    <a href="http://www.bighousebath.com/HouseVideo.mp4" target="_blank"><p>Live & study in my House next to the University of Bath, UK</p></a>
                </div>
                <div className={styles.rightFooter}>
                    <div className={styles.ledtInnerFooter}>
                        <Image src={"/images/QR.jpg"} height={300} width={300} alt={"WeChat Richard"}></Image>
                        <p>WeChat</p>
                    </div>
                </div>
            </div>
            {console.log(myAudioArr)}
        </div>
        <Script>
            {`
            var myAudioArr = [${myAudioArr.map(mpdData => {
                return '["'+mpdData[0]+'","'+mpdData[1]+'"]'
            })}];
            var myArtistImage = document.getElementById("myArtistImage");            
            var myOffSetVal = myArtistImage.offsetLeft;            
            var myImageWidth = myArtistImage.width - 50;
            window.addEventListener("scroll", function(){            
                var myScrollVal = myOffSetVal - window.scrollY;
                if(myScrollVal > -myOffSetVal || myScrollVal > -myImageWidth){
                    myArtistImage.style.right = myOffSetVal - window.scrollY + "px";
                }
                if(window.scrollY > 50){
                    document.getElementById("audioPlayerOter").style.backgroundColor = "rgba(255,255,255,1)";
                    document.getElementById("audioPlayerOter").style.borderColor = "rgba(0,0,0,0.2)";
                } else{
                    document.getElementById("audioPlayerOter").style.backgroundColor = "rgba(255,255,255,0.2)";
                    document.getElementById("audioPlayerOter").style.borderColor = "white";

                }       
            })
            
            var myInterval = null;
            var myAudioTag = document.getElementById("myAudioTag");
            var mySeekBar = document.getElementById("myAudioSeekBar");

            document.getElementById("audioPlayerPlayButton").addEventListener("click", function(){
                if(myAudioTag.paused){
                    this.firstChild.src = "/images/pause3B.png";
                    playTheSong();                   
                    var currentSongIndex = myAudioTag.getAttribute("indexnumber");   
                    document.getElementById("myAudioTitle").innerText = myAudioArr[currentSongIndex][0];
                    myInterval = setInterval(function(){
                        mySeekBar.value = Math.floor(myAudioTag.currentTime / myAudioTag.duration * 100)
                    },1000)
                }else if(myAudioTag.duration > 0 && !myAudioTag.paused){
                    this.firstChild.src = "/images/playB.png";
                    pauseTheSong();
                    clearInterval(myInterval);
                }
            })

            mySeekBar.addEventListener("change", function(){
                myAudioTag.currentTime = mySeekBar.value / 100 * myAudioTag.duration;
            })

            document.getElementById("nextBtn").addEventListener("click", function(){
                var currentSongIndex = myAudioTag.getAttribute("indexnumber");
                currentSongIndex++;
                if(currentSongIndex < myAudioArr.length){
                    myAudioTag.src = myAudioArr[currentSongIndex][1];
                    myAudioTag.setAttribute("indexnumber", currentSongIndex);
                    document.getElementById("myAudioTitle").innerText = myAudioArr[currentSongIndex][0];
                    document.getElementById("audioPlayerPlayButton").firstChild.src = "/images/pause3B.png";
                    playTheSong();         
                    myInterval = setInterval(function(){
                        mySeekBar.value = Math.floor(myAudioTag.currentTime / myAudioTag.duration * 100)
                    },1000)
                }else{
                    console.log("Last Song")
                }
            })

            document.getElementById("myRepeatBtn").addEventListener("click", function(){
                if(this.getAttribute("mybtnmode") == "false" || this.getAttribute("mybtnmode") == false){
                    this.setAttribute("mybtnmode","true");
                    this.style.opacity = 1;
                }else{
                    this.setAttribute("mybtnmode","false");
                    this.style.opacity = 0.4;
                }
            })

            myAudioTag.addEventListener("ended", function(){
                var currentSongIndex = myAudioTag.getAttribute("indexnumber");
                var myRepeatButton = document.getElementById("myRepeatBtn").getAttribute("mybtnmode");
                if(myRepeatButton == true || myRepeatButton == "true"){
                    playTheSong();
                }else{
                    currentSongIndex++;
                    if(currentSongIndex < myAudioArr.length){
                        myAudioTag.src = myAudioArr[currentSongIndex][1];
                        myAudioTag.setAttribute("indexnumber", currentSongIndex);
                        document.getElementById("myAudioTitle").innerText = myAudioArr[currentSongIndex][0];
                        document.getElementById("audioPlayerPlayButton").firstChild.src = "/images/pause3B.png";
                        playTheSong();        
                        myInterval = setInterval(function(){
                            mySeekBar.value = Math.floor(myAudioTag.currentTime / myAudioTag.duration * 100)
                        },1000)
                    }else{
                        console.log("Last Song")
                    }
                }
            })

            document.getElementById("preBtn").addEventListener("click", function(){
                var currentSongIndex = myAudioTag.getAttribute("indexnumber");
                currentSongIndex--;
                if(currentSongIndex >= 0){
                    myAudioTag.src = myAudioArr[currentSongIndex][1];
                    myAudioTag.setAttribute("indexnumber", currentSongIndex);
                    document.getElementById("myAudioTitle").innerText = myAudioArr[currentSongIndex][0];
                    document.getElementById("audioPlayerPlayButton").firstChild.src = "/images/pause3B.png";
                    playTheSong();        
                    myInterval = setInterval(function(){
                        mySeekBar.value = Math.floor(myAudioTag.currentTime / myAudioTag.duration * 100)
                    },1000)
                }else{
                    console.log("First Song")
                }
            })

            document.getElementById("myListBtn").addEventListener("click", function(){
                if(this.getAttribute("isvisible") == "false" || this.getAttribute("isvisible") == false){
                    document.getElementById("myListDiv").style.display = "flex";
                    this.style.opacity = 1;
                    this.setAttribute("isvisible", "true");
                }else{
                    document.getElementById("myListDiv").style.display = "none";
                    this.style.opacity = 0.4;
                    this.setAttribute("isvisible", "false");
                }
            })

            var myClassiCButtons = document.querySelectorAll("#classicButtons");
            myClassiCButtons.forEach(function(e){
                e.addEventListener("click", function(){
                    var currentSongIndex = this.firstChild.getAttribute("indexvalue");
                    myAudioTag.src = myAudioArr[currentSongIndex][1];
                    myAudioTag.setAttribute("indexnumber", currentSongIndex);
                    document.getElementById("myAudioTitle").innerText = myAudioArr[currentSongIndex][0];
                    document.getElementById("audioPlayerPlayButton").firstChild.src = "/images/pause3B.png";
                    playTheSong();          
                    myInterval = setInterval(function(){
                        mySeekBar.value = Math.floor(myAudioTag.currentTime / myAudioTag.duration * 100)
                    },1000)
                })
            })

            var myListCButtons = document.querySelectorAll("#myListCButtons");
            myListCButtons.forEach(function(e){
                e.addEventListener("click", function(){
                    var currentSongIndex = this.firstChild.getAttribute("indexvalue");
                    myAudioTag.src = myAudioArr[currentSongIndex][1];
                    myAudioTag.setAttribute("indexnumber", currentSongIndex);
                    document.getElementById("myAudioTitle").innerText = myAudioArr[currentSongIndex][0];
                    document.getElementById("audioPlayerPlayButton").firstChild.src = "/images/pause3B.png";
                    playTheSong();        
                    myInterval = setInterval(function(){
                        mySeekBar.value = Math.floor(myAudioTag.currentTime / myAudioTag.duration * 100)
                    },1000)
                })
            })

            var myOwnSongsButtons = document.querySelectorAll("#myOwnSongsButtons");
            myOwnSongsButtons.forEach(function(e){
                e.addEventListener("click", function(){
                    var currentSongIndex = this.firstChild.getAttribute("indexvalue");
                    myAudioTag.src = myAudioArr[currentSongIndex][1];
                    myAudioTag.setAttribute("indexnumber", currentSongIndex);
                    document.getElementById("myAudioTitle").innerText = myAudioArr[currentSongIndex][0];
                    document.getElementById("audioPlayerPlayButton").firstChild.src = "/images/pause3B.png";
                    playTheSong();       
                    myInterval = setInterval(function(){
                        mySeekBar.value = Math.floor(myAudioTag.currentTime / myAudioTag.duration * 100)
                    },1000)
                })
            })

            var myListButtons = document.querySelectorAll("#myListButtons");
            myListButtons.forEach(function(e){
                e.addEventListener("click", function(){
                    var currentSongIndex = this.firstChild.getAttribute("indexvalue");
                    myAudioTag.src = myAudioArr[currentSongIndex][1];
                    myAudioTag.setAttribute("indexnumber", currentSongIndex);
                    document.getElementById("myAudioTitle").innerText = myAudioArr[currentSongIndex][0];
                    document.getElementById("audioPlayerPlayButton").firstChild.src = "/images/pause3B.png";
                    playTheSong();
                    myInterval = setInterval(function(){
                        mySeekBar.value = Math.floor(myAudioTag.currentTime / myAudioTag.duration * 100)
                    },1000)
                })
            })



            function playTheSong(){
                myAudioTag.play();                
                if(document.querySelectorAll(".playGifCls").length > 0){
                    document.querySelectorAll(".playGifCls").forEach(function(e){
                        e.classList.remove("playGifCls");
                    })   
                }            
                document.querySelectorAll(".mySongDiv"+myAudioTag.getAttribute("indexnumber")).forEach(function(e){
                    e.classList.add("playGifCls");
                })
            }
            function pauseTheSong(){
                myAudioTag.pause();                
                document.querySelectorAll(".mySongDiv"+myAudioTag.getAttribute("indexnumber")).forEach(function(e){
                    e.classList.remove("playGifCls");
                })
            }

            `}
        </Script>
    </main>
  )
}
