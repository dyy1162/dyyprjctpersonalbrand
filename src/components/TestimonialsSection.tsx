import testimonials from '../data/testimonials.json';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    comment: string;
    rating: number;
    avatar: string | null;
}

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="testimonial-stars">
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={`star ${star <= rating ? '' : 'empty'}`}>
                    ★
                </span>
            ))}
        </div>
    );
}

export default function TestimonialsSection() {
    return (
        <section className="section" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Testimoni Client</h2>
                    <p className="section-subtitle">
                        Apa kata mereka yang sudah bekerja sama dengan dyyProject
                    </p>
                </div>

                <div className="testimonials-grid">
                    {(testimonials as Testimonial[]).map((t) => (
                        <div key={t.id} className="testimonial-card" id={`testimonial-${t.id}`}>
                            <StarRating rating={t.rating} />

                            <p className="testimonial-text">"{t.comment}"</p>

                            <div className="testimonial-author">
                                <div className="testimonial-avatar">
                                    {t.avatar ? (
                                        <img
                                            src={t.avatar}
                                            alt={t.name}
                                            style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        t.name.charAt(0).toUpperCase()
                                    )}
                                </div>
                                <div className="testimonial-author-info">
                                    <h4>{t.name}</h4>
                                    <p>{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
