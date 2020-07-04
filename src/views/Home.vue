<template>
  <div class="home">
      <div class="brand">
          <img class="logo" src="../assets/img/logo-white.svg" alt="Logo">
          <h1 class="title">Your Ear</h1>
          <h2 class="subtitle">Here To Hear You</h2>
      </div>
      <div class="container">
        <nav>
            <a href="#intro">Home</a>
            <a href="#about">About</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
        </nav>
        <div class="content">
            <div id="intro">
                <span class="heading">Welcome</span>
                <br>
                <span class="subheading">
                    Thanks for dropping by, we'd love to be of help.<br><br>
                    We at Your Ear, try to make sure that you are heard. We try to understand each and everything
                    that has ever caused trouble and we help you deal with those things with grace.
                </span>
              </div>
            <div id="about">
                <span class="heading">About</span>
                <br>
                <span class="subheading">
                      We started Your Ear to help people to build a connection with people where they feel valued
                      and so that they can share all that has been unheard until now, we want to be that ear, we want to be
                      <b>Your Ear</b>.<br><br>

                      It all started with counselling of few young kids and now we're open to all age groups. We just
                      want to help. SELFLESSLY. All we want to make out of this is, some really good relations with
                      whom we interact.<br><br>

                      We don't charge money, not a single penny. All we charge you is some love, smiles and
                      a few messages to stay in touch. Hope that's not too much!
                </span>
              </div>
            <div id="testimonials">
                  <div></div>
              </div>
            <div id="contact">
                <span class="heading">Contact</span>
                <br>
                <p class="subheading">
                    <span>Email:</span> <a :href="`mailto:${email}`" target="_blank" rel="noreferrer">{{email}}</a>
                </p>
                <p class="subheading">
                    <span>Phone:</span> <a :href="`tel:${phone}`">{{phone}}</a>
                </p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
        testimonials: [
            {}
        ],
        phone: "+919718282486",
        email: "manubhardwaj@yahoo.com",
        contactForm: {
            name: "",
            contact: ""
        }
    };
  },
  methods: {
      saveDetails() {
          console.log(this.contactForm);
      }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/mixins/flex";
@import "../assets/mixins/responsive";
@import "../assets/mixins/layout";
@import "../assets/mixins/variables";

.home {
    height: 100%;
    @include fx-layout(row);
    @include fx-layout-alignment(flex-start, stretch);

    > * {
        flex: 1;
    }

    .brand {
        background-color: $primary;
        @include fx-layout-with-gap(column, 10px);
        @include fx-layout-alignment(center, center);

        > * {
            margin-top: 0;
            color: $secondary;
        }

        img.logo {
            height: 64px;
            width: 64px;
        }

        h1.title {
            font-size: $title;
        }

        h2.subtitle {
            font-size: $subtitle;
        }
    }

    .container {
        position: relative;
        @include fx-layout(column);
        @include fx-layout-alignment(flex-start, stretch);

        nav {
            width: 100%;
            height: 64px;
            padding: 0 20px;
            box-sizing: border-box;
            background-color: $secondary;
            box-shadow: 0 2px 4px 0 rgba(22,45,61,.12), 0 0 6px 0 rgba(22,45,61,.12);
            z-index: 2;
            @include absTop();
            @include fx-layout-with-gap(row, 40px);
            @include fx-layout-alignment(center, center);

            a {
                text-decoration: none;
                color: $primary;
            }
        }

        .content {
            flex: 1;
            overflow-y: scroll;
            scroll-behavior: smooth;

            #intro, #about, #testimonials, #contact {
                height: 100%;
                padding: 0 40px;
                @include fx-layout-with-gap(column, 10px);
                @include fx-layout-alignment(center, flex-start);
            }

            #intro, #about, #contact {
                @include fx-layout-with-gap(column, 20px);

                .heading {
                    font-size: 32px;
                }

                .subheading {
                    font-size: 16px;
                    line-height: 24px;
                    color: rgba(56, 56, 56, 0.9);
                }
            }

            #contact .subheading {
                margin-top: 0;
                @include fx-layout-with-gap(row, 10px);

                a {
                    color: $primary;
                }
            }
        }
    }
}
</style>
