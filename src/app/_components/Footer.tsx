import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import FacebookIcon from '../../../public/svg/facebook.svg';
import InstagramIcon from '../../../public/svg/instagram.svg';
import TwitterIcon from '../../../public/svg/twitter.svg';
import YoutubeIcon from '../../../public/svg/youtube.svg';

export default function Footer() {
  return (
    <footer {...stylex.props(styles.footer)}>
      <div {...stylex.props(styles.container)}>
        <div {...stylex.props(styles.companyInfo)}>
          <h4>Company info</h4>
          <div {...stylex.props(styles.companyInfoRow)}>
            <span {...stylex.props(styles.text)}>회사명: (주)신산</span>
            <span {...stylex.props(styles.text)}>대표자: 홍길동</span>
            <span {...stylex.props(styles.text)}>주소: 서울특별시</span>
          </div>
          <div {...stylex.props(styles.companyInfoRow)}>
            <span {...stylex.props(styles.text)}>이메일: 0000@00000.co.kr</span>
            <span {...stylex.props(styles.text)}>전화: 0000-0000</span>
            <span {...stylex.props(styles.text)}>통신판매업신고: 0000-0000</span>
          </div>
          <div {...stylex.props(styles.companyInfoRow)}>
            <span {...stylex.props(styles.text)}>사업자등록번호: 000-00-00000</span>
            <span {...stylex.props(styles.text)}>호스팅서비스: 가비아씨엔에스</span>
          </div>
        </div>
        <div {...stylex.props(styles.accountInfo)}>
          <h4>Account info</h4>
          <p {...stylex.props(styles.text)}>KB 000000-00-000000</p>
          <p {...stylex.props(styles.text)}>hong gil dong</p>
        </div>
        <div {...stylex.props(styles.contact)}>
          <h4>Contact us</h4>
          <p {...stylex.props(styles.text)}>0000-0000</p>
          <p {...stylex.props(styles.text)}>0000@00000.co.kr</p>
          <p {...stylex.props(styles.text)}>Mon-Fri 11-17 / Lunch time 13-14</p>
          <p {...stylex.props(styles.text)}>Sat.Sun.Holiday Off</p>
        </div>
        <div {...stylex.props(styles.social)}>
          <Image alt="facebook" src={FacebookIcon} width={20} height={20} />
          <Image alt="instagram" src={InstagramIcon} width={20} height={20} />
          <Image alt="twitter" src={TwitterIcon} width={20} height={20} />
          <Image alt="youtube" src={YoutubeIcon} width={20} height={20} />
        </div>
      </div>
    </footer>
  );
}

const styles = stylex.create({
  footer: {
    borderTop: '1px solid #0377B1',
    backgroundColor: '#F3F4F6',
    color: '#1F2937',
    paddingVertical: 30,
  },
  container: {
    width: '90%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    '@media (max-width: 768px)': {
      display: 'flex',
      gap: 10,
      flexDirection: 'column',
    },
  },
  companyInfo: {
    flexBasis: '20%',
    marginBottom: '16px',

    '@media (max-width: 1024px)': {
      flexBasis: '50%',
    },
  },
  companyInfoRow: {
    display: 'flex',
    gap: 10,
  },
  accountInfo: {
    flexBasis: '20%',
    marginBottom: '16px',
    '@media (max-width: 1024px)': {
      flexBasis: '50%',
    },
  },
  contact: {
    flexBasis: '20%',
    '@media (max-width: 1024px)': {
      flexBasis: '50%',
    },
  },
  social: {
    flexBasis: '20%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    '@media (max-width: 1024px)': {
      flexBasis: '50%',
    },
    '@media (max-width: 768px)': {
      display: 'flex',
      gap: 10,
    },
  },
  text: {
    fontSize: 12,
    color: '#999',
    marginTop: 10,
  },
});
