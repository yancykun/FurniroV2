import { Star, StarHalf } from 'lucide-react';

type StarRatingProps = {
    rating: number;
};

const StarRating = ({ rating }: StarRatingProps) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
        <div className="flex gap-1">
            {[...Array(fullStars)].map((_, i) => (
                <Star key={i} className="text-yellow-500" />
            ))}
            {halfStars === 1 && <StarHalf className="text-yellow-500" />}
            {[...Array(emptyStars)].map((_, i) => (
                <Star key={i} className="text-yellow-500" />
            ))}
        </div>
    );
};

export default StarRating;
