import {
  ProfileHeader,
  Container,
  Photo,
  HandleInfo,
  Seperator,
} from "./profileView.components";

const ProfileView = ({ profile, onClicked }) => {
  //Get First character of each substring
  const nameShortHand = profile.displayName.match(/\b(\w)/g);

  return (
    <Container>
      <div data-testid="nav-link-profile"></div>
      <ProfileHeader>
        <Photo>{nameShortHand}</Photo>
        <HandleInfo>
          <div className="toggleColors">{profile.displayName}</div>
          <Seperator />
          <div className="toggleColors">@{profile.handleName}</div>
        </HandleInfo>
      </ProfileHeader>
    </Container>
  );
};

export default ProfileView;
