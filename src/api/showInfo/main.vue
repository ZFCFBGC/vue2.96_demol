<template>
  <div class="showInfo">
    <div class="mask" v-if="show"></div>
    <div class="show-info" v-if="show">
      <div class="show-info-content">
        <div class="show-info-content-t">{{title}}</div>
         <div class="show-info-content-c">
          <div class="show-info-content-c-a">
            <div class="show-info-content-c-a-c">
              <svg v-if="type==='success'" style="width:2rem;height:1rem;marginRight:0.4rem" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path
                  d="M512 67C266.2 67 67 266.2 67 512s199.2 445 445 445 445-199.2 445-445S757.8 67 512 67z m279.3 724.3c-36.3 36.3-78.5 64.8-125.6 84.7-48.7 20.6-100.4 31-153.7 31s-105.1-10.4-153.7-31c-47-19.9-89.3-48.4-125.6-84.7-36.3-36.3-64.8-78.5-84.7-125.6-20.6-48.7-31-100.4-31-153.7s10.4-105.1 31-153.7c19.9-47 48.4-89.3 84.7-125.6 36.3-36.3 78.5-64.8 125.6-84.7 48.7-20.6 100.4-31 153.7-31s105.1 10.4 153.7 31c47 19.9 89.3 48.4 125.6 84.7 36.3 36.3 64.8 78.5 84.7 125.6 20.6 48.7 31 100.4 31 153.7s-10.4 105.1-31 153.7c-19.9 47.1-48.4 89.3-84.7 125.6z m-45.2-474.5l35.4 35.4-355 355-183.9-183.9 35.4-35.4 148.5 148.5 319.6-319.6z" />
              </svg>
              <div class="content" v-if="content!=''" :style="{color: contentColor}" v-html="content"></div>
            </div>
          </div>
          <div class="error-code">{{errorTitle}}：{{errorCode}}</div>
        </div>
        <div class="show-info-content-b">
          <div class="btn" v-for="(item,index) in items" @click="btnClick(index)" :class="item.active ? 'btnActive': ''" :key="index">{{item.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      show: false,
      title: "",
      type: "",
      content: "",
      center: false,
      contentColor: "#333",
      errorTitle: "参考码",
      errorCode: "",
      items: [],
      inputType: "text",
      themeColor: "#00B2F1"
    }
  }
}
</script>
<style lang="less" scoped>
   .mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    position: fixed;
    z-index: 999;
  }
  .show-info{
    .show-info-content{
      width: 660/750 * 100vw;
      max-width: 330px;
      overflow: hidden;
      background-color: #fff;
      border-radius: 10px;
      position: fixed;
      z-index: 100000000;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      .show-info-content-t{
        font-size: 17px;
        line-height: 17px;
        padding-top: 18px;
        color: #00b2f1;
        text-align: center;
        letter-spacing: 1px;
        text-indent: 1px;
      }
      .show-info-content-c {
        padding-bottom: 8px;
        font-size: 15px;
        line-height: 26px;
        letter-spacing: 1px;

        .show-info-content-c-a {
          width: calc(~"100% - 0px"); //设置右侧滚动条的位置
          margin: 0 auto;
          max-height: 620/1334 * 100vh;
          overflow: scroll;
          overflow-x: hidden;
          overflow-y: hidden;
          margin-top: 15px;
          color: #333;


          .show-info-content-c-a-c {
            width: (375-44)/375 * 100%;
            margin: 0 auto;
            word-wrap: break-word;
            display: flex;

            .content {
              width: 100%;
            }

            .logo {
              font-size: 72/75rem;
            }
          }
        }
        .error-code {
          width: (375-44)/375 * 100%;
          margin: 0 auto;
          color: #777;
        }
      }

      .show-info-content-b {
        display: flex;
        border-top: 1px solid #ddd;

        .btn {
          flex: 1;
          text-align: center;
          line-height: 40px;
          font-size: 16px;
          letter-spacing: 1px;
          text-indent: 1px;
          border-right: 1px solid #ddd;
          color: #666666;
        }
        .btnActive{
          color: #00b2f1;
        }
        .btn:nth-last-child(1) {
          border: none;
        }
      }
    }
  }
</style>