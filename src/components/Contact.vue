<template>
    <v-dialog :width="dialogWidth" v-model="showContactDialog" @click:outside="$emit('close')">
        <v-card>
            <v-card-title class="headline" primary-title>Contact</v-card-title>

            <form @submit.prevent="submit">
                <v-text-field v-model="contactForm.name" label="Full Name" required></v-text-field>
                <v-text-field v-model="contactForm.contact" label="Email/Phone" required></v-text-field>
                <input type="submit" hidden>
            </form>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="$emit('close')">Cancel</v-btn>
                <v-btn class="submit-btn" color="primary" text @click="submit">Submit</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "Contact",
    props: {
        showContactDialog: Boolean
    },
    data: function () {
        return {
            contactForm: {
                name: "",
                contact: ""
            },
            dialogWidth: this.$vuetify.breakpoint === "xs" ? "300px" : "500px"
        };
    },
    methods: {
        submit() {
            console.log(this.contactForm);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/mixins/variables";

.v-dialog {
    .headline {
        background-color: $primary !important;
        color: $secondary !important;
    }

    form {
        padding: 10px 20px 0 20px;
    }

    button.submit-btn {
        background-color: #383838;
        color: white !important;
    }
}
</style>
