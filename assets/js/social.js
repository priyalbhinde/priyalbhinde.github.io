const socialMediaLinks = [
  {
    platform: "GitHub",
    link: "https://github.com/priyalbhinde",
    iconLibrary: "uil",
    iconName: "github-alt",
  },
  {
    platform: "LeetCode",
    link: "https://leetcode.com/Priyal08",
    iconLibrary: "uil",
    iconName: "nerd",
  },
  {
    platform: "LinkedIn",
    link: "https://linkedin.com/in/priyal-bhinde",
    iconLibrary: "uil",
    iconName: "linkedin-alt",
  },
];

function generateSocialIcons(containerClass, socialLinks) {
  const container = document.querySelector(`.${containerClass}`);

  socialLinks.forEach((socialLink) => {
    const socialIcon = document.createElement("a");
    socialIcon.href = socialLink.link;
    socialIcon.target = "_blank";
    socialIcon.classList.add(`${containerClass}`);

    const icon = document.createElement("i");
    icon.classList.add(
      socialLink.iconLibrary,
      `${socialLink.iconLibrary}-${socialLink.iconName}`
    );
    socialIcon.appendChild(icon);

    container.appendChild(socialIcon);
  });
}

generateSocialIcons("home__social", socialMediaLinks);
generateSocialIcons("footer__social", socialMediaLinks);
