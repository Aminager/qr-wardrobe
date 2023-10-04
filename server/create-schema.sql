DROP TABLE IF EXISTS orgs;
DROP TABLE IF EXISTS tags;

CREATE TABLE orgs (
    org_name TEXT,
    short_name TEXT,
    amount_tags INT,
    PRIMARY KEY (org_name)
);

CREATE TABLE tags (
    tag_id INT,
    user_name TEXT,
    tag_status INT,
    org_name TEXT,
    PRIMARY KEY (org_name, tag_id),
    FOREIGN KEY (org_name) REFERENCES orgs(org_name)
);


