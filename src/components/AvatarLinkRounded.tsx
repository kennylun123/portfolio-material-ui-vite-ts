import { Avatar, AvatarProps, Link } from "@mui/material";

interface AvatarLinkRoundedProps extends AvatarProps {
  href: string;
}

function AvatarLinkRounded({
  children,
  href,
  ...otherProps
}: AvatarLinkRoundedProps) {
  return (
    <Avatar
      component={Link}
      href={href}
      target="_blank"
      variant="rounded"
      sizes="large"
      {...otherProps}
    >
      {children}
    </Avatar>
  );
}

export default AvatarLinkRounded;
