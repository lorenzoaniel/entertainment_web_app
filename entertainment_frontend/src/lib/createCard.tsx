import Card from "@/components/card";
import { ICard } from "@/interfaces/ICard";

export const createCard = (cardList: ICard[], isTrending: boolean): React.ReactNode[] => {
	return cardList.map((cardData) => {
		if (cardData.isTrending === isTrending) {
			return <Card cardProps={cardData} />;
		}
	});
};
