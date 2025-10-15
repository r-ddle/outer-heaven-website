export interface SiteConfig {
    activeMembers: number
    discordInviteUrl?: string
}

export const getSiteConfig = async (): Promise<SiteConfig> => {
    const inviteCode = 'eDkGBu3524';
    const response = await fetch(`https://discord.com/api/v9/invites/${inviteCode}?with_counts=true`);
    const data = await response.json();
    return {
        activeMembers: data.approximate_member_count,
        discordInviteUrl: "https://discord.gg/eDkGBu3524"
    };
};
