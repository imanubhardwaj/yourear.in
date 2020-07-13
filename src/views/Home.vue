<template>
  <div class="home">
      <div class="brand">
          <img class="logo" src="../assets/img/logo-white.svg" alt="Logo">
          <h1 class="heading">Your Ear</h1>
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
            <div class="brand">
                <img class="logo" src="../assets/img/logo-white.svg" alt="Logo">
                <h1 class="heading">Your Ear</h1>
                <h2 class="subtitle">Here To Hear You</h2>
            </div>
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
                      want to help. All we want to make out of this is, some really good relations with
                      whom we interact.<br><br>

                      We don't charge money, not a single penny. All we charge you is some love, smiles and
                      a few messages to stay in touch. Hope that's not too much!
                </span>
              </div>
            <div id="testimonials">
                <span class="heading">Testimonials</span>
                <span class="subheading">
                    We have been extremely fortunate to have made so many connections and yet
                    receiving such level of appreciation for our work.
                </span>
                <b>Your appreciation is our motivation.</b>
                <v-carousel cycle height="300" interval="5000" hide-delimiter-background show-arrows-on-hover>
                    <v-carousel-item v-for="testimonial in testimonials" :key="testimonial.user">
                        <div class="testimonial">
                            <span class="text">{{testimonial.text}}</span>
                            <span class="user">{{testimonial.user}}</span>
                        </div>
                    </v-carousel-item>
                </v-carousel>
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
                <p class="subheading">
                    <span>Hesitant to start conversation? We love to do it.</span>
                </p>
                <v-btn class="form-btn" @click="openContactDialog">Fill Details</v-btn>
                <Contact :show-contact-dialog="showContactDialog" @formFilled="showContactSnackbar = true"
                         @close="showContactDialog = false">
                </Contact>
                <v-snackbar v-model="showContactSnackbar">
                    Thankyou! We'll soon be in touch with you.
                    <template v-slot:action="{ attrs }">
                        <v-btn color="pink" text v-bind="attrs" @click="showContactSnackbar = false">Close</v-btn>
                    </template>
                </v-snackbar>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Contact from "../components/Contact";

export default {
  name: 'Home',
  components: {Contact},
  data: function () {
    return {
        testimonials: [
            {
                text: "They counselled my son Kunal and literally transformed him into a completely different person." +
                      " I just can't thank them enough.",
                user: "Beena Gill - New York, USA"
            },
            {
                text: "My daughter Gaurisha wasn't able to find the right track in life and was lost for quite some time." +
                    " I got her counselled and I could notice the changes in her right from the day one. They're great!",
                user: "Supriya Sharma - Gurgaon, IN"
            }
        ],
        phone: "+919718282486",
        email: "manubhardwaj@yahoo.com",
        showContactDialog: false,
        showContactSnackbar: false
    };
  },
  methods: {
      scrollToSection({hash}) {
          if (!hash) {
              return;
          }
          document.querySelector(hash).scrollIntoView();
      },
      openContactDialog() {
          this.showContactDialog = true;
      }
  },
  mounted() {
      this.scrollToSection(this.$route);
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

        h1.heading {
            font-size: $title;
            margin-bottom: 0;
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
            width: calc(100% - 2px);
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
                color: $accent;
            }
        }

        .content {
            flex: 1;
            overflow-y: scroll;
            scroll-behavior: smooth;

            /* Hide Scrollbar */
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */

            &::-webkit-scrollbar {
                display: none;
            }

            .brand {
                display: none;
            }

            #intro, #about, #testimonials, #contact {
                height: 100%;
                padding: 0 40px;
                @include fx-layout-with-gap(column, 10px);
                @include fx-layout-alignment(center, flex-start);
            }

            #intro, #about, #testimonials, #contact {
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

            #testimonials .testimonial {
                height: 100%;
                padding: 0 20px;
                box-sizing: border-box;
                @include fx-layout-with-gap(column, 15px);
                @include fx-layout-alignment(center, center);

                span {
                    color: $accent;
                }

                .text {
                    font-size: large;
                    font-style: italic;
                }

                .user {
                    font-size: $normal;
                }
            }

            #contact {
                .subheading {
                    margin-top: 0;
                    @include fx-layout-with-gap(row, 10px);
                    @include fx-layout-alignment(flex-start, flex-end);

                    a {
                        color: $accent;
                    }
                }

                .form-btn {
                    background-color: $primary;
                    color: $secondary;
                }
            }
        }
    }

    @include respond-below(sm) {
        @include fx-layout(column);

        > .brand {
            display: none;
        }

        .container {
            padding: 0;
            height: 100%;

            nav {
                width: 100%;
                left: unset;
                transform: unset;
                position: fixed;
            }

            .content {
                margin-top: 64px;

                > * {
                    height: 100%;
                }

                .brand {
                    display: flex;
                }
            }
        }
    }
}
</style>
