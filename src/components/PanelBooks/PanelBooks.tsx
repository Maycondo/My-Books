/* eslint-disable @next/next/no-img-element */

import "./style.css";

interface CardPanelProps {
  title: string;
  description: string;
  imageUrl: string;
  lastUpdated: string;
}

export default function PanelBook({ title, description, imageUrl, lastUpdated }: CardPanelProps) {
  return (
        <div className="Painel_Books">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <img src={imageUrl} className="card-img-top" alt={title} />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">Last updated {lastUpdated}</small>
                  </div>
                </div>
              </div>
            </div>
        </div>
  );
}
