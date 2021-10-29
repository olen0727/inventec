<template>
  <div class="home">
    <iframe
      class="istagFrame"
      src="https://livetour.istaging.com/c3b39829-7dde-40b6-b9c1-d7c6ae28eb37"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      width="100%"
      height="100%"
      scrolling="auto"
    ></iframe>
    <div class="wrapper">
      
      <form class="formBox" @submit.prevent="onsubmit()">
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
          <div class="formCol content">
            <p>Welcome any comment and suggestion that you may have.</p>
          </div>
        </div>
        <div class="formRow">
          <div class="formCol title"></div>
          <div class="formCol content">
            <textarea class="formItem textarea" rows="8" v-model="this.bookingForm.msg"></textarea>
          </div>
        </div>
        <div class="formRow">
          <div class="formCol content">
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
        <button type="submit">submit</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "Home",
  // components: {
  //   HelloWorld
  // },
  data() {
    return {
      // pickerOpen: null,
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
    axios.get("http://sa.inventecvirtual.com/api/list").then(res => {
      this.areas = res.data.area;
    });
    
  },
  methods: {
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
      .post("http://sa.inventecvirtual.com/api/reserve", mydata)
      .then(res => {
        console.log(res);
        this.$router.push("/");
      });
    }
  }
};
</script>
<style lang="scss">
.home {
  
}
.wrapper {
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-image: url('../assets/bg.jpg');
  background-size:cover;
  background-position:center center;
  .formBox {
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