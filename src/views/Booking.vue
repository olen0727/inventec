<template>
  <div class="home">
    <VRIframe />
    <ul class="linkList">
      <li class="news" @click="openPOP()"><img src="../assets/icon05.png" alt=""></li>
      <li class="fb"><a href="https://www.facebook.com/Inventec-Data-Center-Solutions-101107418050871/?view_public_for=101107418050871" target="_blank"><img src="../assets/icon02.png" alt=""></a></li>
      <li class="in"><a href="https://www.linkedin.com/company/inventec-data-center-solutions?trk=public_profile_experience-item_result-card_subtitle-click" target="_blank"><img src="../assets/icon03.png" alt=""></a></li>
      <li class="tube"><a href="https://www.youtube.com/channel/UCe68PJ6kFvBBfAzjNwIddiA?view_as=subscriber" target="_blank"><img src="../assets/icon04.png" alt=""></a></li>
      <li class="newsletter"><a href="https://ebg.inventec.com/en/NewsletterSign-up" target="_blank"><img src="../assets/icon01.png" alt=""><span class="text">Newsletter</span></a></li>
      <li class="copylink" @click="copyURL()"><img src="../assets/icon06.png" alt=""></li>
      
    </ul>
    <div class="wrapper" @click.self="closePOP()" v-show="popupIsOpen">
      <form class="formBox" @submit.prevent="onsubmit()">
        <span class="closeBtn" @click="closePOP()"><img src="../assets/close.png" alt=""></span>
        <img class="logo" src="../assets/invenlogo.png" alt="">
        <div class="formRow">
          <div class="formCol title">
            <label>
              Region
              <em>*</em>
            </label>
          </div>
          <div class="formCol content">
            <select class="formItem" required v-model="this.bookingForm.c_id">
              <option value="" disabled selected>Please select</option>
              <option v-for="item in areas" :value="item.c_id" :key="item">{{ item.c_name_en }}</option>
            </select>
          </div>
        </div>

        <div class="formRow">
          <div class="formCol title">
            <label>
              Name
              <em>*</em>
            </label>
          </div>
          <div class="formCol content">
            <input class="formItem" type="text" v-model="this.bookingForm.name" required />
          </div>
        </div>

        <div class="formRow">
          <div class="formCol title">
            <label>
              Company
              <em>*</em>
            </label>
          </div>
          <div class="formCol content">
            <input class="formItem" type="text" v-model="this.bookingForm.company" required />
          </div>
        </div>

        <div class="formRow">
          <div class="formCol title">
            <label>Company type</label>
          </div>
          <div class="formCol content">
            <select class="formItem" required v-model="this.bookingForm.ct_id">
              <option value="" selected disabled>Please select</option>
              <option value="1">Distributor</option>
              <option value="2">System Intergrator</option>
              <option value="3">VAR</option>
              <option value="4">Cloud Service Provider</option>
              <option value="5">End User</option>
              <option value="6">Other</option>
            </select>
          </div>
        </div>
        <div class="formRow">
          <div class="formCol title">
            <label>Position</label>
          </div>
          <div class="formCol content">
            <input class="formItem" type="text" v-model="this.bookingForm.position"/>
          </div>
        </div>
        <div class="formRow">
          <div class="formCol title">
            <label>Tel</label>
          </div>
          <div class="formCol content">
            <input class="formItem" name="tel" type="tel" v-model="this.bookingForm.tel"/>
          </div>
        </div>
        <div class="formRow">
          <div class="formCol title">
            <label>
              E-mail
              <em>*</em>
            </label>
          </div>
          <div class="formCol content">
            <input class="formItem" type="mail" v-model="this.bookingForm.email" required />
          </div>
        </div>
        <div class="formRow">
          <div class="formCol content withoutTitle">
            <p>Welcome any comment and suggestion that you may have.</p>
          </div>
        </div>
        <div class="formRow">
          <div class="formCol content withoutTitle">
            <textarea class="formItem textarea" rows="8" v-model="this.bookingForm.msg"></textarea>
          </div>
        </div>
        <div class="formRow">
          <div class="formCol content withoutTitle">
            <label class="checkLabel">
              <input type="checkbox" required />I agree to privacy policy to process of my personal data for marketing purpose.
            </label>
            <a
              href="https://www.inventec.com/en/term"
              target="_blank"
              class="terms"
            >Terms of Service</a>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import axios from "axios";
import VRIframe from '@/components/VRIframe.vue'
import { useRouter, useRoute } from "vue-router";
import checkIMG from '../assets/check.png'
export default {
  name: "Booking",
  components: {
    VRIframe
  },
  setup() {
    
  },
  data() {
    return {
      popupIsOpen: false,
      areas: [],
      bookingForm: {
        c_id: "", //地區c_id
        name: null, //姓名
        company: null, //公司
        ct_id: "", //公司類別
        position: "", //職位
        tel: null, //電話
        email: null, //信箱
        msg: "" //訊息
      }
    };
  },

  mounted() {
    

    if (this.$route.path === "/NewsletterSign-up/" | this.$route.path === "/NewsletterSign-up") {
      this.popupIsOpen = true;
    } else {
      this.popupIsOpen = false;
    }
    axios.get("https://sa.inventecvirtual.com/api/list").then(res => {
      this.areas = res.data.area;
    });
  },
  methods: {
    copyURL() {
      var dummy = document.createElement('input'),
      text = window.location.href;
      
      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand('copy');
      document.body.removeChild(dummy);
      this.$swal({
        position: "center-center",
        // icon: "success",
        imageUrl:checkIMG,
        imageWidth: 60,
        imageHeight: 60,
        title: "Copy to the clipboard",
        showConfirmButton: false,
        showCloseButton: true,
        timer: 1500
      });
    },
    openPOP() {
      this.$router.push('/NewsletterSign-up');
      this.popupIsOpen = true;
    },
    closePOP() {
      this.$router.push('/');
      this.popupIsOpen = false
    },
    onsubmit() {
      let mydata = new FormData();
    
      mydata.append("c_id", this.bookingForm.c_id);
      mydata.append("name", this.bookingForm.name);
      mydata.append("company", this.bookingForm.company);
      mydata.append("ct_id", this.bookingForm.ct_id);
      mydata.append("email", this.bookingForm.email);
      mydata.append("position", this.bookingForm.position);
      mydata.append("tel", this.bookingForm.tel);
      mydata.append("msg", this.bookingForm.msg);

    axios
      .post("https://sa.inventecvirtual.com/api/reserve", mydata)
      .then(res => {
        console.log(res);
        this.$router.push("/");
        this.popupIsOpen = false;
        this.$swal({
          position: "center-center",
          // icon: "success",
          imageUrl:checkIMG,
          imageWidth: 60,
          imageHeight: 60,
          title: "Thank you for your feedback",
          showConfirmButton: false,
          showCloseButton: true,
          timer: 3000
        });

        // 吐司 msg
        // this.$toast.open({
        //   message: "Sent successfully",
        //   type: "success",
        //   duration: 2000,
        //   dismissible: true
        // })
      });
    }
  }
};
</script>
<style lang="scss">

.home {
  
}
.linkList {
  list-style-type: none;
  margin:0;
  padding:0;
  position: fixed;
  z-index: 1;
  width:40px;
  right: 40px;
  top: 40%;
  transform: translate(0px, -24%);
  @media all and (max-width:1023px) {
    right: 20px;
    top: 20px;
    transform: translate(0);
    width: 32px;
  }
  li {
    cursor: pointer;
    margin-bottom:3px;
    display:block;
    position:relative;
    right:0;
    @media all and (max-width:1023px) {
      // margin-bottom:12px
    }
    img {
      max-width:40px;
      display:block;
      float:left;
      margin-bottom:5px;
      
    }
    span.text {
      display: block;
      line-height: 40px;
      float: left;
      // width: 82px;
      font-family: Arial;
      text-align: center;
      background: #595756;
      position: relative;
      margin-left: -2px;
      color: #fff;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      color:#fff;
      overflow: hidden;
      width:0px;
    }
    &:after {
      display:block;
      content:"";
      clear:both;
    }
    &.newsletter:hover {
      width:120px;
      right:80px;
      transition: .3s;
      span.text {
        width:82px;
        transition: .3s;
      }
    }
  }
}
.wrapper {
  background: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  // background-image: url('../assets/bg.jpg');
  background-size:cover;
  background-position:center center;
  .formBox {
    font-family: Arial;
    position: relative;
    background: #fff;
    border-radius: 0.2em;
    padding: 2em 3em;
    margin: 0 auto;
    width: 720px;
    height: auto;
    max-width: 95vw;
    box-shadow: 5px 5px 5px rgb(0 0 0 / 50%);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-height: 95vh;
    overflow: auto;
    box-sizing: border-box;
    .closeBtn {
      position: absolute;
      right:8px;
      top:8px;
      width:36px;
      height:36px;
      padding:8px;
      border-radius: 50%;
      
      &:hover {
        background: #ccc;
        cursor: pointer;
      }
      img {
        max-width:100%;
      }
    }
    .logo {
      display:block;
      margin:0 auto 1.5em;
    }
    .formRow {
      padding: 0.25em;
      &:after {
        display: block;
        content: "";
        clear: both;
      }
      .formCol {
        &.title {
          width: 8em;
          float: left;
          text-align:left;
          em {
            color:red;
          }
        }
        &.content {
          width: calc(100% - 8em);
          float: right;
          &.withoutTitle {
            @media all and (max-width:768px) {
              width:100%;
            }
          }
          .formItem {
            width: 100%;
            border: 1px solid #aaa;
            height: 1.75em;
            border-radius: 0.2em;
            &.textarea {
              height: 8em;
            }
          }
          p {
            margin: 0.25em 0;
          }
          .checkLabel {
            margin-left: 1.7em;
            text-indent: -1.7em;

            display: block;
          }
          input[type="checkbox"] {
            margin-right: 0.75em;
          }
          a.terms {
            margin-left: 1.7em;
            line-height: 3;
          }
        }
      }
    }
    button[type="submit"] {
      display: block;
      margin: auto;
      background: red;
      color: #fff;
      border: 1px solid #fff;
      font-size: 16px;
      padding: 0.25em 0.75em;
      max-width: 6em;
      border-radius: .3em;
      &:hover {
        background:#fff;
        border:1px solid red;
        color:red;
        cursor: pointer;
      }
    }
  }
}
</style>