export const getGithubUserData = async () => {
    const response = await fetch("https://api.github.com/users/Sudeep9845");
    if (!response.ok) {
        throw new Error("Failed to fetch GitHub user data");
    }
    return await response.json();
}