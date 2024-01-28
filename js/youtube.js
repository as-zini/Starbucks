var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads
      function onYouTubeIframeAPIReady() {
        new YT.Player('player', {
          videoId: 'An6LvWQuj_8', //어떤 아이디 값을 가지고있는 영상을 출력할것인지 명시해주는 속성
          playVars:{ //영상을 제어해주는 속성
            autoplay: true,
            loop: true,
            playlist: 'An6LvWQuj_8'
          },
          events:{ //영상의 이벤트 제어
            onReady: function (event) { //영상이 준비되면 메소드를 실행해주는 속성
              event.target.mute();
            }
          }
        })
      }
