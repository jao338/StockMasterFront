import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("authStore", {
	state: () => ({
		user: {},
		token: null,
	}),
	actions: {
		async setUserData(data) {
			try {
				this.user = data.user;
				this.token = data.access_token;
				localStorage.setItem("auth_token", this.token);
				axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
			} catch (error) {
				throw error;
			}
		},
		logout() {
			this.user = null;
			this.token = null;
			localStorage.removeItem("auth_token");
			delete axios.defaults.headers.common["Authorization"];
		},
		initialize() {
			const token = localStorage.getItem("auth_token");
			if (token) {
				this.token = token;
				axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
				this.fetchUser();
			}
		},
		async fetchUser() {
			try {
				const response = await axios.get("/api/user");
				this.user = response.data;
			} catch (error) {
				this.logout();
			}
		},

		async fetchCsrfToken() {
			try {
				const response = await axios.get("/csrf-token");
				this.csrfToken = response.data.csrf_token;
				axios.defaults.headers.common["X-CSRF-TOKEN"] = this.csrfToken;
			} catch (error) {
				console.error("Error fetching CSRF token:", error);
			}
		},
	},
});
