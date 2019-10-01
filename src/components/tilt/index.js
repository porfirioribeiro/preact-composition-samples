import styles from './style.scss';

export default function Tilt({ tiltRef, children }) {
	return (
		<div ref={tiltRef} className={styles.tiltRoot}>
			<div className={styles.tiltChild}>
				<div className={styles.totallyCentered}>{children}</div>
			</div>
		</div>
	);
}
