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
  title: "Mohamed Abdelnasser 👨🏽‍💻",
  tagline:
    "I'm a software engineer who enjoys building efficient, reusable front-end abstractions and systems.",
  url: "https://mabdelnasser.me",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "mohamedsgap",
  projectName: "personal-website",
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
        // { to: "portfolio", label: "Portfolio", position: "left" },
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
              href: "https://twitter.com/mohamedsgap",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/mohamedsgap/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, Mohamed Abdelnasser 👨🏽‍💻.`,
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
