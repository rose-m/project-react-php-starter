CREATE TABLE IF NOT EXISTS template.orders (
  order_id VARCHAR(255) NOT NULL PRIMARY KEY,
  order_status VARCHAR(255) NOT NULL,
  config JSON NOT NULL,
  checkout_session_id VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
