DROP TABLE IF EXISTS orgs;
DROP TABLE IF EXISTS tags;

CREATE TABLE orgs (
    org_name TEXT,
    org_short_name TEXT,
    amount_tags INT,
    PRIMARY KEY (org_short_name)
);

CREATE TABLE tags (
    tag_id INT,
    user_name TEXT,
    tag_status INT,
    org_short_name TEXT,
    PRIMARY KEY (org_short_name, tag_id),
    FOREIGN KEY (org_short_name) REFERENCES orgs(org_short_name)
);

CREATE TABLE admins (
    admin_name TEXT,
    admin_password TEXT,
    org_short_name TEXT,
    PRIMARY KEY (admin_name)
    FOREIGN KEY (org_short_name) REFERENCES orgs(org_short_name)
);
