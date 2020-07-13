<template>
    <v-dialog persistent :width="dialogWidth" v-model="showContactDialog">
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
                <v-progress-circular v-if="loading" size="20" width="2" indeterminate></v-progress-circular>
                <v-btn v-else class="submit-btn" color="primary" text @click="submit">Submit</v-btn>
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
            contactForm: this.getInitialForm(),
            dialogWidth: this.$vuetify.breakpoint === "xs" ? "300px" : "500px",
            loading: false
        };
    },
    methods: {
        getInitialForm() {
            return {
                name: "",
                contact: ""
            };
        },
        submit() {
            const {name, contact} = this.contactForm;
            if (!name || !contact) {
                return;
            }
            const url = "https://your-ear.firebaseio.com/contacts.json";
            const options = {
                method: "POST",
                body: JSON.stringify({name, contact})
            };
            this.loading = true;
            fetch(url, options).then(() => {
                this.loading = false;
                this.$emit('close');
                this.$emit('formFilled');
                this.contactForm = this.getInitialForm();
            });
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

    .v-card__actions {
        padding: 8px 20px 16px 20px;

        button.submit-btn {
            background-color: $primary;
            color: white !important;
        }

        .v-progress-circular {
            width: 84px !important;
            height: 36px !important;
        }
    }
}
</style>
