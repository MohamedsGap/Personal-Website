const mohamedOnInternet = {
  github: {
    label: "GitHub",
    href: "https://github.com/mohamedsgap",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamedsgap",
  },

  twitter: {
    label: "Twitter",
    href: "https://twitter.com/mohamedsgap",
  },
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/mohamedsgap/",
  },
};

module.exports = {
  title: "Mohamed Abdel-Nasser",
  tagline:
    "I am a software engineer with a passion for all things web and open source.",
  url: "https://www.mohdabdelnasser.live",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "mohamedsgap", // Usually your GitHub org/user name.
  projectName: "personal-website", // Usually your repo name.
  themeConfig: {
    mohamedOnInternet,
    navbar: {
      title: "Mohamed",
      items: [
        {
          to: "docs/resume",
          activeBasePath: "docs/resume",
          label: "Resume",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        { to: "bucket-list", label: "Bucket List", position: "left" },
        { to: "portfolio", label: "Portfolio", position: "left" },

        {
          href: "https://github.com/mohamedsgap",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Professional",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/mohamedsgap/",
            },
            {
              label: "Github",
              href: "https://github.com/mohamedsgap",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/fannyvieiira",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/mohamedsgap/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, Mohamed Abdel-Nasser.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
