import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <footer className="p-6 text-center text-white/80 sm:p-12">
      <a
        href="https://www.instagram.com/jason.ahern/"
        target="_blank"
        className="font-semibold hover:text-white"
        rel="noreferrer"
      >
        <InstagramIcon />
      </a>
      {"   "}
      <a
        href="mailto:jason.ahern53@gmail.com"
        target="_blank"
        className="font-semibold hover:text-white"
        rel="noreferrer"
      >
        <MailOutlineIcon />
      </a>
      {"   "}
      <a
        href="https://github.com/ahern55/"
        target="_blank"
        className="font-semibold hover:text-white"
        rel="noreferrer"
      >
        <GitHubIcon />
      </a>
    </footer>
  );
}
