import Button from "@/components/ui/Button/Button";
import styles from "./QuotesSection.module.scss";
import { Container } from "@/components/layout/Container/Container";
import { QuotesItem } from "@/components/ui/QuotesItem/QuotesItem";

export const QuotesSection = () => {
  const QuotesItemsList = [
    {
      href: "img/user-img/1.jpg",
      nickname: "Evan Lahti",
      pos: "PC Gamer",
      comm: "“One of my gaming highlights of the year.”",
      date: "October 18, 2018"
    },
    {
      href: "img/user-img/2.jpg",
      nickname: "Jada Griffin",
      pos: "Nerdreactor",
      comm: "“The next big thing in the world of streaming and survival games.”",
      date: "December 21, 2018"
    },
    {
      href: "img/user-img/3.jpg",
      nickname: "Aaron Williams",
      pos: "Uproxx",
      comm: "“Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.”",
      date: "December 24, 2018"
    },
  ];
  return (
    <section className={styles.quotes}>
      <Container className={styles.container}>
        <div className={styles.info}>
          <p className={`caption ${styles.caption}`}> What people think?</p>
          <h2 className={`title subtitle ${styles.title}`}>Press quotes</h2>
          <p className={`text ${styles.text}`}>
            Our goal is to create a product and service that you’re satisfied
            with and use it every day. This is why we’re constantly working on
            our services to make it better every day and really listen to what
            our users has to say.
          </p>
          <Button
            primaryText="Read more testimonials"
            className={styles.button}
          />
        </div>
        <div className={styles.quotes}>
          {QuotesItemsList.map((item, index) => (
            <QuotesItem
              key={index}
              className={styles.quote}
              href={item.href}
              nickname={item.nickname}
              pos={item.pos}
              comm={item.comm}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
