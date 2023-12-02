import Link from 'next/link';
import styles from './repositories.module.css';
/**
 *  About Page
 *  Created by Muhammed Elşami on 01.12.2023
 */ 

async function getRepos() {
    const response = await fetch('https://api.github.com/users/muhammedelsami/repos');
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const repos = await response.json();
    return repos;
}

export default async function RepositoriesPage() {

    const data = await getRepos();

    return ( 
            <div className={styles.container}>
                {data.map((repo: any) => (
                    <Link key={repo.id} href={repo.html_url} className={styles.repoItem}>
                            <div className={styles.ownerInfo}>
                                <img src={repo.owner.avatar_url} alt="Owner" className={styles.ownerImage} />
                                <div>Owner: {repo.owner.login}</div>
                            </div>
                            <h2>{repo.name}</h2>
                            <div>{repo.description}</div>
                            <div className={styles.repoDetails}>
                                <div>Language: {repo.language}</div>
                                <div>Watcher: {repo.watchers_count}</div>
                                <div>Stars: {repo.stargazers_count}</div>
                                <div>Default branch: {repo.default_branch}</div>
                            </div>
                            
                            <div className={styles.repoDate}>
                                <div>Created at: { `${new Date(repo.created_at).toLocaleDateString()}  ${new Date(repo.created_at).toLocaleTimeString()}`}</div>-
                                <div>Updated at: { `${new Date(repo.updated_at).toLocaleDateString()}  ${new Date(repo.updated_at).toLocaleTimeString()}`}</div>
                            </div>
                    </Link>
                ))}
            </div>
    );
}